import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [character, setCharacter] = useState('');

  function getCharacter(id) {
    const url = 'http://localhost:5000/api/character/' + id;
    fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        setCharacter(res);
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  return (
    getCharacter(1),
    <div className='container'>
      <div className='row min-vh-100'>
        <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
          <h1>Hello</h1>
          {renderCharacter(character)}
        </div>
      </div>
    </div>
  )

  function renderCharacter() {
    <div class="card" style="width: 18rem;">
      {/* <img class="card-img-top" src="{character.image}" alt="Card image cap" /> */}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  }
}

export default App
