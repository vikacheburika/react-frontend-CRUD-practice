import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx';
import CharacterList from './components/CharacterList/CharacterList.jsx';
import data from './data/characters.js';

function App() {
  const [characters, setCharacters] = useState(data);

  return (
    <>
      <Header first="How I Met Your Mother" second="Character Catalog"/>
      <CharacterList/>
    </>
  );
}

export default App;
