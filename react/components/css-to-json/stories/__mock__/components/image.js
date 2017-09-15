import React from 'react';

const Image = (props) => {
  if(!props) { return null; }
  const { $attributes } = props;

  return <img {...$attributes} />;
};

export default Image;