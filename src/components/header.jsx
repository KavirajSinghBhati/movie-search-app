import React, { useState, useEffect } from "react";
import axios from "axios";
import "./header.css";

import MovieDetail from "./MovieDetail";

const Header = () => {
  const [query, setQuery] = useState("");
  const [searchQ, setSearchQ] = useState("");
  const [movies, setMovies] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQ(query);
  };
  useEffect(() => {
    const request = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "ae0ab1b54c0fbc42c9d0daa2d7cf099a",
            query: searchQ,
          },
        }
      );
      setMovies(data.results);
    };
    request();
  }, [searchQ]);
  return (
    <div className="header">
      <h1>Movie Search App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {movies.map((movie) => (
        <MovieDetail key={movie.id} title={movie.original_title} />
      ))}
    </div>
  );
};

export default Header;
