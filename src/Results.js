import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results text-left ms-5 mt-5">
        <div className="text-capitalize">
          <h2>{props.results.word}</h2>
        </div>
        <h3>/{props.results.phonetic}/</h3>
        {props.results.meanings.slice(0, 3).map(function (meaning, index) {
          return (
            <div key={index}>
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
