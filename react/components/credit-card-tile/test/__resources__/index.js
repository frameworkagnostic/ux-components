
//import '../../src/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import WebComponent from '../../src/web';

function App(props) {
  return (
    <WebComponent {...props} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
