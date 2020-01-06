import React, { Component } from "react";

const AddUser = props => {
  return (
    <div>
      <h1>Add User</h1>
      <form action='' onSubmit={props.onSubmitNewUser}>
        <div className='form-group'>
          <label htmlFor='newUser'>Enter new username</label>
          <input
            value={props.newUsername}
            onChange={props.onChangeNewUsername}
            type='text'
            id='newUser'
            name='newUser'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
