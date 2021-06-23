import React, { useState } from 'react';
import { Card } from '../../Components/Card/Card';
import { Modal } from "../../Components/Modal/Modal"

import "./Home.scss";

function Home({ characterList }) {
  const [open, setOpen] = useState(false);
  const [selectedCharacter,setSelectedCharacter] = useState({
    id: null,
    image: "",
    name: "",
    status: "",
    gender: "",
    species: ""
  })

  const handleClickOpen = (value) => {
    setSelectedCharacter(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="HomeContainer">
      {characterList && characterList.length > 0 && characterList.map(character => (
        <Card
          key={character.id} 
          onClick={() => handleClickOpen(character)}
        >
          <img className="ImageCharacter"
            src={character.image}
            alt={`imagem do personagem ${character.name}`}
          />
          <h2 className="nameCharacter" >{character.name}</h2>
        </Card>
      ))}

      <Modal open={open} onClose={handleClose}>
        <Card key={selectedCharacter.id} onClick={handleClickOpen}>
          <img className="ImageModal"
            src={selectedCharacter.image}
            alt={`imagem do personagem ${selectedCharacter.name}`}
          />
          <h2 className="nameCharacter" >{selectedCharacter.name}</h2>
          <h3>{`Status - ${selectedCharacter.status}`}</h3>
          <h3>{`Status - ${selectedCharacter.gender}`}</h3>
          <h3>{`Status - ${selectedCharacter.species}`}</h3>
        </Card>
      </Modal>
    </div>
  );
}

export default Home;