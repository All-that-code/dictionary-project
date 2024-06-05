import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="WordMeaning mt-5 mb-5">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="Definition text-capitalize mt-3">
        <p>{props.meaning.definition}</p>
      </div>
      <div className="Example text-capitalize">
        <p>{props.meaning.example}</p>
      </div>
    </div>
  );
}
