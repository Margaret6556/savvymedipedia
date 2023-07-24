import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <section>
          <h2> {results.word}</h2>
          {results.map((meanings, index) => {
            return (
              <div key={index}>
                <Meaning meaning={meanings} /> <br />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
