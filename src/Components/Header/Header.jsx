import React from 'react'

import Logo from "../../assets/images/Logo.png"

import './Header.scss';

export default function Header() {
  return (
    <React.StrictMode>
      <header> 
        <img className="logoMain" src={Logo} alt="" />

        <div className="TextMain">
          <h2>Conheça todos os personagens da série.</h2>
        </div>
      </header>
    </React.StrictMode>
  )
}