import React from 'react';

function MoviesList(props){
    const movies  = props.movies.map(function(movie){
        return(
            <li key={movie._id}>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Uploaded by: {movie.user.username}</p>
                <button onClick={()=>{
                    props.deleteMovie(movie._id)
                }}>Delete</button>
            </li>
        )
    })
    return(
        <ul>
            {movies}
        </ul>
    )
}

export default MoviesList;