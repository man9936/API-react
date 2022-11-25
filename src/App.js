import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies,setMovies]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
 async function fetchMovieHandler(){

    setIsLoading(true);
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
      setIsLoading(false);
    }

  return (
    <React.Fragment>
      <section>
        <button>{fetchMovieHandler}</button>
      </section>
      <section>
       {!isLoading && movies.length >0 && <MoviesList movies={movies} />} 
       {!isLoading && movies.length == 0 && <p>Found No movies</p> } 
       {isLoading && <p>Loading Movie List....</p>} 
       

      </section>
    </React.Fragment>
  );
}

export default App;
