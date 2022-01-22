import React from "react";
import "./MovieDetail.css";

const MovieDetail = ({ title, path, releaseDate, rating, desc }) => {
  return (
    <div className="card-grid">
      <div className="card">
        <img
          className="card--img"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${path}`}
          alt={`${title} movie poster`}
        ></img>
        <div className="card--content">
          <h3 className="card--title">{title}</h3>
          <p className="card--date">
            Release Date: <strong>{releaseDate}</strong>
          </p>
          <p className="card--rating">
            Rating: <strong>{rating}</strong> ⭐
          </p>
          <p className="card--desc">
            <strong>Description</strong>: {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
