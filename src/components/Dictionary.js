import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [resultsPhotos, setResultsPhotos] = useState(null);

  function handlenlm(response) {
    console.log(response.data.result.results);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleScImgResponse(response) {
    setResultsPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault(); //api code source from Paul (SC) + UMLS
    let apiKey = "39284b94tea8fb240cc5d3o3a355d5a0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const shecodesImgApikey = "39284b94tea8fb240cc5d3o3a355d5a0";
    let shecodesImgUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesImgApikey}&perrow=3`;
    axios.get(shecodesImgUrl).then(handleScImgResponse);

    let nlmapiKey = "4a2e4532-8028-45f5-bc50-f05be550ae6a";
    let nlmapiUrl = `https://uts-ws.nlm.nih.gov/rest/search/current?apiKey=${nlmapiKey}&string=${keyword}`;
    axios.get(nlmapiUrl).then(handlenlm);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="input"
            className="search-input-form"
            onChange={handleKeywordChange}
            autoFocus={true}
          />
        </form>
        <div className="hint">
          hint: asthma, migraine, anemia, diverticulitis...
        </div>
      </section>
      <Results results={results} />
      <Photos photos={resultsPhotos} />
    </div>
  );
}
