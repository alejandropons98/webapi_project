import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [character, setCharacter] = useState('');

  function getCharacter(id) {
    
    const url = 'https://localhost:7182/api/character/' + id;
    
    useEffect(() => {
      fetch(url, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          setCharacter(res.data);
          console.log(res);
        })
        .catch(err => console.log(err));
    }, []);
  }

  return (
    getCharacter(1),
    <div className='container'>
      <div className='row min-vh-100'>
        <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
          {renderCharacter(character)}
        </div>
      </div>
    </div>
  );

  function renderCharacter() {
    return (
    <div className="card">
      <img className="card-img-top" src={character.imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h1 className="card-title">{character.name}</h1>
        <h5 className="card-text">Devil Fruit: {character.devilFruit}</ h5>
        <h5 className="card-text">Pirate Crew: {character.pirateCrew}</ h5>
      </div>
    </div>
    );
  }
}

export default App
