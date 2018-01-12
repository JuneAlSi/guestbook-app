import React from 'react';

const Name = (props) => (
  <div className="name">
      <p className="name__text">{props.count}. {props.nameText}</p>
      <button
        className="button button-link"
        onClick={(e) => {
          props.handleDeleteName(props.nameText);
        }}
      >
        remove
      </button>
  </div>
);

export default Name;