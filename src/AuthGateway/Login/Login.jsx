import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: null,
            password: null
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMITTED THE FORM");
        // login function coming in from parent
        this.props.handleLogin(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                username: <input type="text" name="username" onChange={this.handleChange}/>
                password: <input type="password" name="password" onChange={this.handleChange}/>
                <input type="submit" value="Register"/>
            </form>
        )
    }
}

export default Login;