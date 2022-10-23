import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react';

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

  return (
    // getCharacters(),
    //       <div className='row row-cols-1 row-cols-md-2 g-4'>
    //         {characters.map((character) => (
    //           <div className='col'>
    //             <div className='card h-100'>
    //             <img src={character.imgUrl} className='card-image-top' alt='...' />
    //             <div className='card-body'>
    //               <h5 className='card-title'>{character.name}</h5>
    //               <p className='card-text'>Devil Fruit: {character.devilFruit}</p>
    //             </div>
    //           </div>
    //           </div>
                
    //         ))}
    // </div>
    getCharacter(1),
    <div className='container'>
          {renderCharacter(character)}
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
