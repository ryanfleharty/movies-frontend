import React from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer/MoviesContainer';
import AuthGateway from './AuthGateway/AuthGateway';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleRegister = async (formData) => {
    console.log("REGISTERING")
    console.log(formData);
    const registerResponse = await fetch("http://localhost:9000/auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse);
    if(parsedResponse.status.code === 201){
      console.log("SUCCESSFUL REGISTRATION");
      this.setState({
        loggedIn: true,
        username: parsedResponse.data.username
      })
    }
  }
  handleLogin = async (formData) => {
    console.log("LOGIN")
    console.log(formData);
    const registerResponse = await fetch("http://localhost:9000/auth/login", {
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse);
    if(parsedResponse.status.code === 200){
      console.log("SUCCESSFUL REGISTRATION");
      this.setState({
        loggedIn: true,
        username: parsedResponse.data.username
      })
    }
  }
  render(){
    return (
      <div className="App">
        {
          this.state.loggedIn ?
          <MoviesContainer/> :
          <AuthGateway handleLogin={this.handleLogin} handleRegister={this.handleRegister}/>
        }
       
      </div>
    );
  }

}

export default App;
