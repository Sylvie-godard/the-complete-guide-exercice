import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Je suis {props.name}</p>
      <p>Mon deuxième paragraph</p>
    </div>
  );
};

export default userOutput;