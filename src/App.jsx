import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import data from "./data.json";
import ArtistList from "./components/ArtistList";
function App() {
  const { label, founded, city, tagline, artists } = data;
  return (
    <>
      <h1>
        Welcome! We are {label}, founded {founded} based in {city}.
      </h1>
      <p>{tagline}</p>
      <ArtistList artists={artists} />
    </>
  );
}

export default App;
