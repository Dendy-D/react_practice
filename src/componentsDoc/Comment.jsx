import React, { Components } from 'react'

function formatDate(date) {
  return date.toLocaleDateString();
}

const Avatar = (props) => {
  return (
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar/>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

export default Comment