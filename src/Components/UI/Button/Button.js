import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const { type, className, onClick, disabled, children } = props;

  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
