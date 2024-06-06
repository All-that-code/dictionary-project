import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="text-left ms-5 me-5 mt-5">
        <div className="WordPhoneticsSection">
          <div className="text-capitalize">
            <h2>{props.results.word}</h2>
          </div>
          <h3>/{props.results.phonetic}/</h3>
        </div>
        {props.results.meanings.slice(0, 3).map(function (meaning, index) {
          return (
            <div key={index} className="MeaningSection">
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
