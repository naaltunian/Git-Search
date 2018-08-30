import React from 'react';

const UserForm = (props) => {
  return(
    <form onSubmit={props.userInfo}>
      <input type="text" name="username"></input>
      <button>Submit</button>
    </form>
  );
}

export default UserForm;
