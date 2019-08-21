import React, { Component } from 'react';
import MoviesList from './MoviesList/MoviesList';
import NewMovie from './NewMovie/NewMovie';

class MoviesContainer extends Component {
    constructor(){
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount(){
        console.log("component is mounting");
        this.getMovies();
    }
    deleteMovie = async (id) => {
        console.log(id);
        try{
            const deleteMovie = await fetch(`http://localhost:9000/api/v1/movies/${id}`, {
                method: "DELETE",
                credentials: "include"
            });
            const parsedResponse = await deleteMovie.json();
            if(parsedResponse.status.code === 200){
                this.setState({
                    movies: this.state.movies.filter(movie => movie._id !== id)
                })
            }
        }catch(err){
            console.log(err);
        }
    }
    createMovie = async (formData) => {
        console.log(formData);
        try{
            const newMovie = await fetch("http://localhost:9000/api/v1/movies", {
                method: "POST",
                body: JSON.stringify(formData),
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const parsedResponse = await newMovie.json();
            if(parsedResponse.status.code === 201){
                this.setState({
                    movies: [...this.state.movies, parsedResponse.data]
                })
            }
        }catch(err){
            console.log(err);
        }
    }
    getMovies = async () => {
        try{
            const movies = await fetch("http://localhost:9000/api/v1/movies", {
                credentials: "include"
            });
            const parsedResponse = await movies.json();
            if(parsedResponse.status.code === 200){
                this.setState({
                    movies: parsedResponse.data
                })
            }
        }catch(err){
            console.log(err);
        }
    }
    render(){
        return(
            <div>
                <h1>Here's the movie container</h1>
                <NewMovie createMovie={this.createMovie} />
                <MoviesList movies={this.state.movies} deleteMovie={this.deleteMovie} />
            </div>
        )
    }
}

export default MoviesContainer;