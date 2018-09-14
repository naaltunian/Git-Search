import React from 'react';

const UserForm = (props) => {
  return(
    <form onSubmit={props.userInfo}>
      <input placeholder="Username" type="text" name="username"></input>
      <button>Submit</button>
      <h3>Enter Github Username</h3>
    </form>
  );
}

export default UserForm;
