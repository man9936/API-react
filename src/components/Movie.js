import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  function deleteHandler() {
    fetch(
      `https://api-react-cc646-default-rtdb.firebaseio.com/movie.json/${props.id}`,
      {
        method: "DELETE",
      }
    ).then(props.onload);
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button
        onClick={deleteHandler}
        style={{ backgroundColor: "yellow", color: "black" }}
      >
        Delete
      </button>
    </li>
  );
};

export default Movie;
