import React, { useState } from 'react';

import "./Genero.scss";

import menuHamburger from "../../../assets/icons/menu-hamburger.png"
import seta from "../../../assets/icons/seta-branca.png"

export default function FilterGenero() {
  const [checked, setChecked] = useState(false);
  const styles = !checked ? "openMenu" : "closedMenu"

  return (
    <div className="menuGenero">
      <div className="menu" onClick={() => setChecked(!checked)}>
        <img className="menuHamburger" src={menuHamburger} alt="Menu hamburger" />
        <p className="TextoDoGenero">Gênero</p>
        <img className="seta" src={seta} alt="Seta" />
      </div>
      <div className={styles}>
        <ul>
          <li>Homem</li>
          <li>Mulher</li>
        </ul>
      </div>
    </div>
  )
}