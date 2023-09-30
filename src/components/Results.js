import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <section>
          <h2> {results.word}</h2>
          <div>
            {results.meanings[2] && <Meaning meaning={results.meanings[2]} />}{" "}
            <br />
            {results.meanings[3] && (
              <Meaning meaning={results.meanings[3]} />
            )}{" "}
            <br />
            {results.meanings[1] && (
              <Meaning meaning={results.meanings[1]} />
            )}{" "}
            <br />
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
