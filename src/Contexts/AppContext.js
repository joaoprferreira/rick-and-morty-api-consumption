import React, { createContext, useCallback, useContext, useState } from 'react';
import { GetCharacters } from '../Services/Character';
/* import { characters } from "../_mock/apiMock"; */

const BaseUrl = "https://rickandmortyapi.com/api/character"

const defaultValue = {
  getAll: () => { },
  loading: false,
  characterList: [],
  setCurrentPage: () => {},
  prevPage: null,
  nextPage: null,
  currentPage: null,
  getByFilter: (filterValue) => {},
};

const AppContext = createContext(defaultValue);

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(`${BaseUrl}/?page=1`);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const [characterList, setCharacterList] = useState([])

  const getAll = useCallback(async () => {
    setLoading(true);
    try {
      const response = await GetCharacters(currentPage)
      setNextPage(response.info.next)
      setPrevPage(response.info.prev)
      setCharacterList(response.results)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }

  }, [
    currentPage,
  ])

  const getByFilter = useCallback(async ({ name, status, gender }) => {
    setCurrentPage(`${BaseUrl}/?name=${name}&status=${status}&gender=${gender}`)
  }, [])

  return (
    <AppContext.Provider
      value={{
        getAll,
        loading,
        characterList,
        setCurrentPage,
        prevPage,
        nextPage,
        currentPage,
        getByFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Esse component não tem acesso ao app context")
  }

  return context;
}