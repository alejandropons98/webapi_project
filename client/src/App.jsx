import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react';
import CharacterCard from './components/CharacterCard';
import CharacterCardGrid from './components/CharacterCardGrid';
import NavBar from './components/NavBar';
import AddCharacterForm from './components/AddCharacterForm';

function App() {
  const [character, setCharacter] = useState('');
  const [characters, setCharacters] = useState([]);

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

  function getCharacters() {
    const url = 'https://localhost:7182/api/character/getall';

    useEffect(() => {
      fetch(url, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          setCharacters(res.data);
          console.log(res);
        })
        .catch(err => console.log(err));
    }, []);
  }

  return (getCharacters(),
    <>
    <NavBar />
    <AddCharacterForm />
     <CharacterCardGrid characters={characters} /> 
    </>
    );
}

        export default App
