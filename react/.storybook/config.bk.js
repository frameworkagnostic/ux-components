// import { configure } from '@storybook/react';
//
// function loadStories() {
//   STORYBOOKS.map(function(path) {
//     return require.resolve(path);
//   }).map(console.log);
//   require('../stories');
// }
//
// configure(loadStories, module);


import { configure } from '@storybook/react';

console.log(STORYBOOKS);


function loadStories() {
    STORYBOOKS.map(function(path) {
      return `../${path}`;
    }).map(function(path) {
      console.log(path);
      const reqSrc = require.context(path, true, /\.stories\.js$/);
      reqSrc.keys().forEach((filename) => reqSrc(filename))
    });
  //reqSrc.keys().forEach((filename) => reqSrc(filename))
  //../src/__doc__/index.stories.js
  //require('../src/__doc__/index.stories');

}

configure(loadStories, module);
