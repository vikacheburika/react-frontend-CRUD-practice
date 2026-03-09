import "./CharacterCard.css";
import Button from "react-bootstrap/Button";

function CharacterCard({props, onEdit}) {
  

  return (
    <>
      <article>
        <h3>{props.name}</h3>
        <img src={props.source} alt="character_pic" />
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Job: {props.job}</p>
        <button onClick={()=>onEdit(props)}></button>
      </article>
    </>
  );
};

export default CharacterCard;
