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
            {results.meanings &&
              results.meanings.map((meaning, index) =>
                index < 3 ? <Meaning meaning={meaning} /> : null
              )}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
