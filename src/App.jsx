import { useState } from "react";
import data from "./data";
import React from "react";

const App = () => {
  const [Birthday, setBirthday] = useState(data);
  const [BirthdayCnt, setBirthdayCnt] = useState(data.length);

  const clearlist = () => {
    setBirthdayCnt(0);
    setBirthday([]);
  };

  return (
    <main>
      <section className="container">
        <h2>{BirthdayCnt} - Birthday Today</h2>

        {Birthday.map((cur) => {
          return (
            <section key={cur.id}>
              <article className="person">
                <img src={cur.image} className="img" alt="" />
                <div>
                  <h4>{cur.age}</h4>
                  <h4>{cur.name}</h4>
                </div>
              </article>
            </section>
          );
        })}

        <button type="button" className="btn btn-block" onClick={clearlist}>
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
