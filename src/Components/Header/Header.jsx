import React from 'react'
import Select from 'react-select'
import Logo from "../../assets/images/Logo.png";
import { Search } from "../../Components/Search/Search"
import { optionsGenero, optionsStatus } from './_mock';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <img className="logoMain" src={Logo} alt="logo rick and morty" />
      <div className="TextMain">
        <h2 className='white'>Conheça todos os personagens da série.</h2>
        <div className="filterArea">
          <Select options={optionsGenero} placeholder="Genêro"/>
          <Select options={optionsStatus} placeholder='Status'/>
          <Search placeholder="Procurar" />
        </div>
      </div>
    </header>
  )
}