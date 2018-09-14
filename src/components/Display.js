import React from 'react';

const Display = (props) => {
  return(
    <div>
      { props.name && <p>Name: {props.name}</p>}
      { props.url && <p>Github URL: <a href={props.url} target="_blank">{props.url}</a></p>}
      { props.email && <p>Email: {props.email}</p>}
      { props.bio && <p>Bio: {props.bio}</p>}
      { props.company && <p>Company: {props.company}</p>}
      { props.blog && <p>Blog: <a href={props.blog} target="_blank">{props.blog}</a></p>}
      { props.repos && <p>Number of repos: {props.repos}</p>}
      { props.followers ? <p>Followers: {props.followers}</p> : null}
      { props.following ? <p>Following: {props.following}</p> : null}
    </div>
  );
}

export default Display;
