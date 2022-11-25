import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies,setMovies]=useState([])
 async function fetchMovieHandler(){

   const resp= await fetch('https://swapi.dev/api/films')
     const data=await resp.json()
        const transformedMovies=data.results.map(movieData=>{
        return{
          id: movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date
        }
      })
      setMovies(transformedMovies);
    }

  return (
    <React.Fragment>
      <section>
        <button>{fetchMovieHandler}</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
