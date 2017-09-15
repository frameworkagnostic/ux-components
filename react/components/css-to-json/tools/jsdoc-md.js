var documentation = require('documentation');
var fs = require('fs');
var path = require('path');

documentation.build([
  path.join(__dirname, '../src/web/index.js')
], {
  parseExtension: ['js', 'jsx', 'es5', 'es6']
})
  .then(documentation.formats.md)
  .then(output => {
    fs.writeFileSync(path.join(__dirname, '../src/web/README.md'), output);
  });