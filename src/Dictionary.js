import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "8o03bb70ba39844fdc4a5a5t25cc70b6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="search"
            placeholder="Enter a word"
            className="searchBar"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="Hint text-center">
          <small>i.e. Anachronism, Cajole, Onomatopoeia </small>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
