import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl =
      "https://api.shecodes.io/dictionary/v1/define?word=sunset&key=8o03bb70ba39844fdc4a5a5t25cc70b6";
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="searchForm">
        <input
          type="search"
          placeholder="Enter a word"
          className="searchBar"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
