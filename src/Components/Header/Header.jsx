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
    setFilters({
      ...filters,
      [data.key]: data.value
    })
  }

  useEffect(() => {
    clearTimeout(debounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    debounce = setTimeout(() => {
      getByFilter(filters)
    },[500])
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
            placeholder={filters.gender || "Genêro"}
            onChange={({ value }) => {
              handleChangeFilters({ value, key: "gender" })
            }}
            value = {filters.gender}
          />
          <Select
            options={optionsStatus}
            placeholder={filters.status || "Status"}
            onChange={({ value }) => {
              handleChangeFilters({ value, key: "status" })
            }}
            value = {filters.status}
          />
          <Search
            placeholder="Procurar"
            onChange={({ target: { value } }) => {
              handleSearch({ value, key: "name" })
            }}
            value = {filters.name}
          />
          <button onClick={() => setFilters(intialFiltersState)} className="buttonClearFilters">Limpar Filtros</button>
        </div>
      </div>
    </header>
  )
}