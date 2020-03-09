import React from 'react';

const Default_placeholder_img="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


 const Movie = ({movie}) => {
     const poster = movie.Poster==="N/A"? Default_placeholder_img : movie.Poster
    return (
        <div className="movie">
        <h2>{movie.Title}</h2>
        <div>
        <img width="200" alt={`the movie titled : ${movie.Title}`} src={poster}></img>
        </div>
            <p>{movie.Year}</p>
        </div>
    );
};
export default Movie
