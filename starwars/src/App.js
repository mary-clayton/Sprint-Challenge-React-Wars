
import React, { useState, useEffect } from "react";
import axios from "axios";
import StarCard from "./components/StarCard";
import { Row, Spinner } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [star, setStar] = useState();

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setStar(response.data.results);
      })
      .catch(error => `Error: ${error}`);
  }, []);

  if (star !== undefined) {
    return (
      <div className="App">
        <h1 className="Header"><span role="img" aria-label= "alien">👽</span>React Wars<span role="img" aria-label= "alien">👽</span> </h1>
        <Row className = "rows">
          {star.map((person, count) => {
           
            return <StarCard key={count} person={person} />;
            
          })}
          </Row>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="loader">
          <h2>Preparing Space Ship Data <span role="img" aria-label= "spaceship">🚀</span></h2>
          <Spinner size="sm" color="light" />
        </div>
      </div>
    );
  }
};
export default App;