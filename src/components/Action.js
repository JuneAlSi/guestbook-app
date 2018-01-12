import React from 'react';

const Action = (props) => (
  <div>
      <button
        className="big-button"
        onClick={props.handleGreeting}
        disabled={!props.hasNames}
      >
        Thank you for visiting!
      </button>
  </div>
);

export default Action;