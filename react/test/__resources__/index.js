
//import '../../src/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import WebComponent from '../../src/top-navigation/top-navigation.web';

console.log(WebComponent);
function App(props) {
  return (
    <WebComponent {...props} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
