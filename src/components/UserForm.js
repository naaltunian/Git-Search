import React from 'react';

const UserForm = (props) => {
  return(
    <form className="center" onSubmit={props.userInfo}>
      <h4>Enter Github Username</h4>
      <input className="space" placeholder="Username" type="text" name="username"></input>
      <br></br>
      <button className="btn btn-primary btn-sm space">Submit</button>
    </form>
  );
}

export default UserForm;
