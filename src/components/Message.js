import React from "react";

function Message(props) {
  return (
    <div className='d-block af-message-wrapper px-2 rounded my-2'>
      <div className='text-dark af-username'>{props.messageObj.username}</div>
      <div className='text-dark af-message'>{props.messageObj.message}</div>
      <div className='af-date'>{props.messageObj.date}</div>
    </div>
  );
}

export default Message;
