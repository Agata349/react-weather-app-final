import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
        <footer>
          This project was coded by Agata Piekarczyk and is {""}
        <a href="https://github.com/Agata349/react-weather-app-final" target="_blank" rel="noreferrer">
          open-sourced on GitHub
        </a>
        </footer>
      </div>
    </div> 
  );
}

