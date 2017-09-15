import React from 'react';

const Button = (props) => {
  if(!props) { return null; }
  const { $attributes } = props;
  return (<button {...$attributes} >{props.text}</button>);
};

export default Button;