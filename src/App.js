import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm.js';
import Title from "./components/Title.js";
import Display from "./components/Display.js";

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
          repos: repos.public_repos,
          name: repos.name,
          bio: repos.bio,
          blog: repos.blog,
          company: repos.company,
          email: repos.email,
          followers: repos.followers,
          following: repos.following,
          html_url: repos.html_url
        });
        console.log(res.data);
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
        <Display
            repos={this.state.repos}
            name={this.state.name}
            bio={this.state.bio}
            blog={this.state.blog}
            company={this.state.company}
            email={this.state.email}
            followers={this.state.followers}
            following={this.state.following}
            url={this.state.html_url}
           />
      </div>
    );
  }
}

export default App;
