import React from 'react';
import Name from './Name';

const Names = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Name / Address</h3>
      <button 
        className="button button--link"
        onClick={props.handleDeleteNames}
      >
        Remove All
      </button>
    </div>      
      {props.names.length === 0 && <p className="widget__message">Please add your name to the list</p>}
      {
        props.names.map((name, index) => (
          <Name 
            key={Names}
            nameText={name}
            count={index+1}
            handleDeleteName={props.handleDeleteName}
          />
        ))
      }
  </div>
);

export default Names;