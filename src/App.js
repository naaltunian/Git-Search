import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm.js';
import Title from "./components/Title.js";

// https://api.github.com/users/{user}


class App extends Component {
  state = {
    name: null,
    repos: null,
    bio: null,
    blog: null,
    company: null,
    email: null,
    followers: null,
    following: null,
    html_url: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if(user){
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data;
        this.setState({
          repos: repos.public_repos
        });
      }).catch((error) => {
        this.setState({
          repos: "user not found"
        });
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <Title />
        <UserForm userInfo={this.getUser} />
        { this.state.repos ? <p>Number of repos: {this.state.repos}</p> : <p>Enter username</p> }
      </div>
    );
  }
}

export default App;
