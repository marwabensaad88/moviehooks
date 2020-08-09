/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState } from "react";

import "./App.css";
import ListMovies from "./components/ListMovies";
import SearchMovie from "./components/SearchMovie";

function App() {
  const [listMovies, setListMovies] = useState([
    {
      title: "Bigfoot Family",
      genre: "Comedy",
      year: "5 aout 2020",
      description:
        "Depuis son retour en ville, Bigfoot est devenu la star des médias. Au grand dam de son fils Adam qui rêvait d'une vie de famille paisible. L'adolescent essaye de dompter les incroyables pouvoirs hérités de son père et trouve réconfort auprès de la folle ménagerie abritée sous son toit.",
      image: "http://fr.web.img6.acsta.net/c_215_290/pictures/20/06/23/11/55/2307228.jpg",
      rating: 4
    },
    {
      title: "Les Blagues de Toto",
      genre: "Comedy",
      year: "5 aout 2020",
      description:
        "A l’école, Toto est bien plus doué pour faire rire ses copains qu’écouter les leçons de la maîtresse. Avec ses parents aussi, les blagues de Toto se transforment souvent en catastrophes… La dernière en date ? La chute d’une sculpture pendant un évènement organisé par le patron de son père. Mais cette fois-ci, Toto assure qu’il est innocent et refuse d’être accusé d’une bêtise que pour une fois, il n’a pas faite ! Avec ses meilleurs amis, il va mener l’enquêtenpm",
      image: "http://fr.web.img6.acsta.net/c_215_290/pictures/20/06/08/12/13/4494723.jpg",
      rating: 3
    },
    {
      title: "Best Man Do",
      genre: "Action",
      year: 2020,
      description:
        "Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…y",
      image: "http://fr.web.img3.acsta.net/c_215_290/pictures/20/08/03/12/15/2118693.jpg",
      rating: 5
    }
  ]);

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [searchtitle, setSearchTitle] = useState("");
  const [searchrating, setSearchRating] = useState("");

  const searchMovieByTitle = item => {
    setSearchTitle(item);
  };
  const searchMovieByRating = item => {
    setSearchRating(item);
  };

  const onAddMovie = () => {
    setListMovies([...listMovies, { title, genre, year, description, image, rating }]);
    setTitle("");
    setGenre("");
    setYear("");
    setDescription("");
    setImage("");
    setRating("");
  };
  const onEditMovie = () => {
    setListMovies([...listMovies, { title, genre, year, description, image, rating }]);
    setTitle("");
    setGenre("");
    setYear("");
    setDescription("");
    setImage("");
    setRating("");
  };
  const onDeleteMovie = i => {
    setListMovies(listMovies.filter((item, j) => i !== j));
  };

  return (
    <div className="App">
      <SearchMovie
        searchMovieByTitle={searchMovieByTitle}
        searchMovieByRating={searchMovieByRating}
      />
      <ListMovies
        listMovies={listMovies}
        onAddMovie={onAddMovie}
        onEditMovie={onEditMovie}
        onDeleteMovie={onDeleteMovie}
        setTitle={setTitle}
        setGenre={setGenre}
        setYear={setYear}
        setDescription={setDescription}
        setImage={setImage}
        setRating={setRating}
        searchtitle={searchtitle}
        searchrating={searchrating}
      />
    </div>
  );
}

export default App;
