import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx';
import CharacterCard from './components/CharacterCard/CharacterCard.jsx';
import data from './data/characters.js';

function App() {
  const [characters, setCharacters] = useState(data);

  return (
    <>
      <Header first="How I Met Your Mother" second="Character Catalog"/>
      <main>
        <div className="cards">
          {data.map(characters=>(
            <CharacterCard key={characters.id} name = {characters.name} age = {characters.age} job = {characters.job} source = {characters.source} />
          ))

          }
          {/* <CharacterCard name = {characters[0].name} age = {characters[0].age} job = {characters[0].job} source = {characters[0].source} />
          <CharacterCard name = {characters[1].name} age = {characters[1].age} job = {characters[1].job} source = {characters[1].source} />
          <CharacterCard name = {characters[2].name} age = {characters[2].age} job = {characters[2].job} source = {characters[2].source} /> */}
          
          
        </div>
        {/* <div className="cards">
          <CharacterCard name = {characters[3].name} age = {characters[3].age} job = {characters[3].job} source = {characters[3].source} />
          <CharacterCard name = {characters[4].name} age = {characters[4].age} job = {characters[4].job} source = {characters[4].source} />
          <CharacterCard name = {characters[5].name} age = {characters[5].age} job = {characters[5].job} source = {characters[5].source} />
        </div> */}
      </main>
    </>
  );
}

export default App;
