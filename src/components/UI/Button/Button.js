import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    {console.log("button running");}
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
