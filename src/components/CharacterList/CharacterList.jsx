import { v4 as uuidv4 } from 'uuid';
import CharacterCard from '../CharacterCard/CharacterCard.jsx';
import data from '../../data/characters.js';
import { useState } from 'react'
import NewCharacterCard from '../NewCharacterCard/NewCharacterCard.jsx';
import defaultImage from '../../data/default.js';
import "./CharacterList.css"

function CharacterList() {
    

  const [characters, setCharacters] = useState(data);
  const [characterInput, setCharacterInput] = useState("");
  const [editCharacterId, setEditCharacterId] = useState(null);
  const [ageC, setAgeC] = useState("")
  const [jobC, setJobC] = useState("")
  const [sourceC, setSourceC] = useState("")

  
  function addCharacter() {
    if (!characterInput.trim()) return;

    const imageUrl = sourceC.trim() || defaultImage;

    const newCharacter = {
      id: uuidv4(),
      name: characterInput,
      age: ageC,
      job: jobC,
      source: imageUrl,
    };
    setCharacters((prev) => [...prev, newCharacter]);
    setCharacterInput("");
    setAgeC("")
    setJobC("")
    setSourceC("")
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editCharacterId) {
      updateCharacter();
    } else {
      addCharacter();
    }
    console.log(characters);
  }

  function deleteCharacter(id) {
    setCharacters((prevCharacter) => prevCharacter.filter((character) => character.id !== id));
    function startEdit(character) {
      setCharacterInput(character.description);
      setEditCharacterId(character.id);
    }
  }
  function startEdit(character) {
    setCharacterInput(character.name);
    setAgeC(character.age)
    setJobC(character.job)
    setEditCharacterId(character.id);
    setSourceC(character.source)
  }
  function updateCharacter() {
    setCharacters((prev) =>
      prev.map((character) =>
        character.id === editCharacterId ? { ...character, name: characterInput, age: ageC, source: sourceC, job: jobC } : character,
      ),
    );
    setEditCharacterId(null);
    setCharacterInput("");
    setAgeC("")
    setJobC("")
    setSourceC("")
  }
  

  return (
    <>
      <div className="crud">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Name"
            value={characterInput}
            onChange={(e) => setCharacterInput(e.target.value)}
          />
          <input 
            type="number"
            placeholder="Age"
            value={ageC}
            onChange={(e) => setAgeC(e.target.value)} 
          />
          <input 
            type="text"
            placeholder='Job'
            value={jobC}
            onChange={(e) => setJobC(e.target.value)}  
          />
          <input 
            type="text"
            placeholder="Image URL"
            value={sourceC}
            onChange={(e) => setSourceC(e.target.value)}  
          />

          <button type="submit">{editCharacterId ? "Update" : "Add character"}</button>
        </form>
      </div>
      <main>
        {/* <div className="cards">
          {data.map(characters=>(
            <CharacterCard key={characters.id} name = {characters.name} age = {characters.age} job = {characters.job} source = {characters.source} />
          ))

          }
        </div> */}
        <div className="cards">
            
            {characters.map((item)=> (
                <NewCharacterCard
                key={item.id}
                character={item}
                onDelete={deleteCharacter}
                onEdit={startEdit}
                />
            ))}

        </div>
      </main>
    </>
  );
}

export default CharacterList;