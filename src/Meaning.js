import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="WordMeaning mt-5 mb-5">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="Definition text-lowercase mt-3">
        <p>{props.meaning.definition}</p>
      </div>
      <div className="Example text-lowercase">
        <p>{props.meaning.example}</p>
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
