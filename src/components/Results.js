import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results({ results }) {
  console.log(results);
  if (results) {
    return (
      <div className="Results">
        <section>
          <h2> {results.word}</h2>
          <div>
            <Meaning meaning={results.meanings[2]} /> <br />
            <Meaning meaning={results.meanings[3]} /> <br />
            <Meaning meaning={results.meanings[1]} /> <br />
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
