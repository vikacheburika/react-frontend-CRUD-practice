import "./CharacterCard.css";
import Button from "react-bootstrap/Button";

const CharacterCard = (props) => {
  return (
    <>
      <article>
        <h3>{props.name}</h3>
        <img src={props.source} alt="character_pic" />
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Job: {props.job}</p>
        <div className="container">
          <div className="row">
            <Button variant="light">
              Edit
            </Button>
            <Button variant="dark">
              Delete
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default CharacterCard;
