import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Logo from "../../assets/images/Logo.png";
import { Search } from "../../Components/Search/Search"
import { optionsGenero, optionsStatus } from './_mock';
import './Header.scss';

export default function Header() {
  const [ filters,setFilters] = useState({
    gender: "",
    status: "",
    name: "",
  })

  const handleChangeFilters = (data) => {
    setFilters({
      ...filters,
      [data.key]: data.value
    })
  }

  useEffect(() => {
    console.log("filters@=",filters)
  },[filters])

  
  return (
    <header>
      <img className="logoMain" src={Logo} alt="logo rick and morty" />
      <div className="TextMain">
        <h2 className='white'>Conheça todos os personagens da série.</h2>
        <div className="filterArea">
          <Select
            options={optionsGenero}
            placeholder="Genêro" 
            onChange={({value})=> {
              handleChangeFilters({ value, key:"gender" })
            }}
          />
          <Select
            options={optionsStatus}
            placeholder='Status'
            onChange={({value})=> {
              handleChangeFilters({ value, key:"status" })
            }}
          />
          <Search
            placeholder="Procurar" 
          />
        </div>
      </div>
    </header>
  )
}