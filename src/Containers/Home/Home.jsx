import React, { useEffect, useState } from 'react';
import { Card } from '../../Components/Card/Card';
import { Modal } from "../../Components/Modal/Modal"
import { useAppContext } from '../../Contexts/AppContext';
import CircularProgress from '@material-ui/core/CircularProgress';

import "./Home.scss";

function Home() {
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState({
    id: null,
    image: "",
    name: "",
    status: "",
    gender: "",
    species: ""
  })

  const { getAll, loading, characterList } = useAppContext();
  
  const handleClickOpen = (value) => {
    setSelectedCharacter(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getAll()
  }, [getAll])

  return (
    <div 
      className={`HomeContainer ${loading && "HomeContainer--flexCenter"}`}
    >
      {(!loading && characterList.length > 0) ? characterList.map(character => (
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
      )): <CircularProgress />
      } 

      <Modal open={open} onClose={handleClose}>
        <Card key={selectedCharacter.id} className="card cardModal">
          <img className="ImageModal"
            src={selectedCharacter.image}
            alt={`imagem do personagem ${selectedCharacter.name}`}
          />
          <h2 className="nameModal" >{selectedCharacter.name}</h2>
          <h3 className="TextModal" >Status - <span className="valueModal">{selectedCharacter.status}</span></h3>
          <h3 className="TextModal" >Gênero Sexual - <span className="valueModal">{selectedCharacter.gender}</span></h3>
          <h3 className="TextModal"  >Especie - <span className="valueModal"> {`${selectedCharacter.species}`}</span> </h3>
        </Card>
      </Modal>
    </div>
  );
}

export default Home;