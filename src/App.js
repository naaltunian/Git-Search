import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm.js';

// https://api.github.com/users/{user}


class App extends Component {
  state = {
    repos: null,

  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      const repos = res.data.public_repos;
      this.setState({
        repos: repos
      });
    });
  }

  render() {
    return (
      <div>
        <h1>HTTP Calls in React</h1>
        <UserForm userInfo={this.getUser} />
        {this.state.repos ? <p>Number of repos: {this.state.repos}</p>}
      </div>
    );
  }
}

export default App;
