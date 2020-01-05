import React, { Component } from "react";

export class AddMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      date: new Date(),
      message: "",
      users: ["Aron", "Flo", "Lars"] // eig. aus Datenbank
    };

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeMessage = e => {
    this.setState({
      message: e.target.value
    });
  };

  onChangeUser = e => {
    this.setState({
      username: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    console.log(this.state.username);
    console.log(this.state.message);
  };

  render() {
    return (
      <div>
        <form action='' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='selectUser'>Select a user</label>
            <select
              onChange={this.onChangeUser}
              value={this.state.username}
              name='selectUser'
              id='selectUser'
              className='form-control'
            >
              {this.state.users !== []
                ? this.state.users.map(user => {
                    return <option key={user}>{user}</option>;
                  })
                : null}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Send a message</label>
            <textarea
              onChange={this.onChangeMessage}
              value={this.state.message}
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
