import React, { useEffect, useState } from 'react'
import { useAppContext } from "../../Contexts/AppContext";
import Select from 'react-select'
import Logo from "../../assets/images/Logo.png";
import { Search } from "../../Components/Search/Search"
import { optionsGenero, optionsStatus } from './_mock';
import './Header.scss';

const intialFiltersState = {
  gender: "",
  status: "",
  name: "",
}

export default function Header() {
  const [filters, setFilters] = useState(intialFiltersState);

  let debounce = null

  const { getByFilter } = useAppContext();

  const handleChangeFilters = (data) => {
    
    setFilters({
      ...filters,
      [data.key]: data.value
    })
  }

  const handleSearch = (data) => {
    clearTimeout(debounce)
    debounce = setTimeout(() => {
      setFilters({
        ...filters,
        [data.key]: data.value
      })
    },[600])
  }

  useEffect(() => {
    getByFilter(filters)
  }, [
    filters,
    getByFilter
  ])

  return (
    <header>
      <img className="logoMain" src={Logo} alt="logo rick and morty" />
      <div className="TextMain">
        <h2 className='white'>Conheça todos os personagens da série.</h2>
        <div className="filterArea">
          <Select
            options={optionsGenero}
            placeholder="Genêro"
            onChange={({ value }) => {
              handleChangeFilters({ value, key: "gender" })
            }}
          />
          <Select
            options={optionsStatus}
            placeholder='Status'
            onChange={({ value }) => {
              handleChangeFilters({ value, key: "status" })
            }}
          />
          <Search
            placeholder="Procurar"
            onChange={({ target: { value, name } }) => {
              handleSearch({ value, key: "name" })
            }}
            value = {filters.name}
          />
          <button onClick={() => setFilters(intialFiltersState)}>limpar</button>
        </div>
      </div>
    </header>
  )
}