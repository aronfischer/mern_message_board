import React, { Component } from "react";
import axios from "axios";
import Message from "./Message";
import AddMessage from "./AddMessage";
import AddUser from "./AddUser";

export class MessageBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: [],
      date: new Date(),
      users: [],
      newUsername: ""
    };
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    this.onChangeNewUsername = this.onChangeNewUsername.bind(this);
    this.onSubmitNewUser = this.onSubmitNewUser.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/messages/")
      .then(response => {
        this.setState({
          messages: response.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("http://localhost:4000/users/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username)
          });
        }
      })
      .catch(err => console.log(err));

    setTimeout(() => {
      console.log(this.state.users);
      console.log(this.state.messages);
    }, 1000);
  }

  onSubmitMessage = async e => {
    e.preventDefault();
    console.log("Message submitted");
    console.log(this.state.date);

    const newMessage = {
      username: this.state.username,
      message: this.state.message,
      date: this.state.date
    };

    await axios
      .post("http://localhost:4000/messages/add", newMessage)
      .then(res => console.log(res.data));

    axios
      .get("http://localhost:4000/messages/")
      .then(response => {
        this.setState({
          messages: response.data
        });
      })
      .catch(err => console.log(err));

    this.setState({
      newUsername: "",
      username: "",
      message: ""
    });
  };

  onSubmitNewUser = async e => {
    e.preventDefault();
    console.log("User submitted");

    const newUser = {
      username: this.state.newUsername
    };

    await axios
      .post("http://localhost:4000/users/add", newUser)
      .then(res => console.log(res.data));

    axios
      .get("http://localhost:4000/users/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username)
          });
        }
      })
      .catch(err => console.log(err));

    this.setState({
      newUsername: "",
      username: "",
      message: ""
    });
  };

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

  onChangeNewUsername = e => {
    this.setState({
      newUsername: e.target.value
    });
  };

  render() {
    return (
      <div className='container'>
        <h1>Message Board</h1>
        {this.state.messages !== []
          ? this.state.messages.map(messageObj => {
              return <Message key={messageObj._id} messageObj={messageObj} />;
            })
          : null}
        <AddUser
          newUsername={this.state.newUsername}
          onChangeNewUsername={this.onChangeNewUsername}
          onSubmitNewUser={this.onSubmitNewUser}
        />
        <AddMessage
          onSubmitMessage={this.onSubmitMessage}
          onChangeMessage={this.onChangeMessage}
          onChangeUser={this.onChangeUser}
          users={this.state.users}
          username={this.state.username}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default MessageBoard;
