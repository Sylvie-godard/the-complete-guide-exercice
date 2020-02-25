import React from 'react';

const userOutput = (props) => {
  return (
    <div>
      <p>Je suis {props.name}</p>
      <p>Mon deuxième paragraph</p>
    </div>
  );
};

export default userOutput;