import React from 'react';

// figure out why urls don't work
const Display = (props) => {
  return(
    <div>
      { props.name && <p>Name: {props.name}</p>}
      { props.url && <p>Github URL: {props.url}</p>}
      { props.email && <p>Email: {props.email}</p>}
      { props.bio && <p>Bio: {props.bio}</p>}
      { props.company && <p>Company: {props.company}</p>}
      { props.blog && <p>Blog: <a>{props.blog}</a></p>}
      { props.repos && <p>Number of repos: {props.repos}</p>}
      { props.followers && <p>Followers: {props.followers} users</p>}
      { props.following && <p>Following: {props.following} users</p>}
    </div>
  );
}

export default Display;

// { props.temperature && <p>Temperature: {props.temperature}</p> }
