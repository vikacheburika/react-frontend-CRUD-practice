import "./NewCharacterCard.css";
import Button from "react-bootstrap/Button";

function NewCharacterCard({character, onEdit, onDelete}) {
  

  return (
    <>
      <article>
        <h3>{character.name}</h3>
        <img src={character.source} alt="character_pic" />
        <p>Name: {character.name}</p>
        <p>Age: {character.age}</p>
        <p>Job: {character.job}</p>
        <div className="container">
          <div className="row">
            <Button variant="light" onClick={()=>onEdit(character)}>
              Edit
            </Button>
            <Button variant="dark" onClick={()=>{onDelete(character.id)}}>
              Delete
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default NewCharacterCard;