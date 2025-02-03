// import React from 'react'
import { useState } from "react";

import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Mufasa", release_date: "2025" },
    { id: 2, title: "Sonic 3", release_date: "2025" },
    { id: 3, title: "Moana 2", release_date: "2025" },
    { id: 4, title: "One of the days", release_date: "2025" },
  ];
  
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movieItem) => (
          <MovieCard movie={movieItem} key={movieItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
