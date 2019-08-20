import React, { Component } from 'react';

class NewMovie extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            description: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMovie(this.state);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a new movie</h4>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" onChange={this.handleChange} />
                <br></br>
                <label htmlFor="description">Description:</label>
                <textarea name="description" onChange={this.handleChange}></textarea>
                <input type="submit" value="Create a Movie" />
            </form>
        )
    }
}
export default NewMovie;