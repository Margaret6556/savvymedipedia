import React from "react";
import "./Meaning.css";

export default function Meaning({ meaning }) {
  // console.log(meaning);

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p>
        {meaning.definition} {meaning.synonym}
        <em>{meaning.example}</em>
      </p>
    </div>
  );
}
