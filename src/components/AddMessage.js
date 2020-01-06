import React, { Component } from "react";
import axios from "axios";

export class AddMessage extends Component {
  render() {
    return (
      <div>
        <form action='' onSubmit={this.props.onSubmitMessage}>
          <div className='form-group'>
            <label htmlFor='selectUser'>Select a user</label>
            <select
              onChange={this.props.onChangeUser}
              value={this.props.username}
              name='selectUser'
              id='selectUser'
              className='form-control'
            >
              {this.props.users !== []
                ? this.props.users.map(user => {
                    return <option key={user}>{user}</option>;
                  })
                : null}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Send a message</label>
            <textarea
              onChange={this.props.onChangeMessage}
              value={this.props.message}
              name='message'
              id='message'
              rows='5'
              className='form-control'
            ></textarea>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMessage;
