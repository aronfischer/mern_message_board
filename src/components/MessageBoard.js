import React, { Component } from "react";
import axios from "axios";
import Message from "./Message";
import AddMessage from "./AddMessage";

export class MessageBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: [],
      date: new Date(),
      users: []
    };
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

  render() {
    return (
      <div className='container'>
        <h1>Message Board</h1>
        {this.state.messages !== []
          ? this.state.messages.map(messageObj => {
              return <Message key={messageObj._id} messageObj={messageObj} />;
            })
          : null}
        <AddMessage />
      </div>
    );
  }
}

export default MessageBoard;
