
var bytes = require('bytes');
var parse = require('../index');
var fs = require('fs');
var path = require('path');

var small = fs.readFileSync(path.join(__dirname, '../../test/__mock__/benchmark/small.css'), 'utf8');
var large = fs.readFileSync(path.join(__dirname, '../../test/__mock__/benchmark/large.css'), 'utf8');
var huge = Array(8).join(large);

function lines(str) {
  return str.split(/\n/g).length;
}

// console.log();
// console.log('  small : %s : %s lines', bytes(Buffer.byteLength(small)), lines(small));
// console.log('  large : %s : %s lines', bytes(Buffer.byteLength(large)), lines(large));
// console.log('   huge : %s : %s lines', bytes(Buffer.byteLength(huge)), lines(huge));

suite('css parseA', function(){
  bench('small1', function(){ parse(small); });
  bench('small1', function(){ parse(small); });
  //bench('large', function(){ parse(large); });
  //bench('huge', function(){ parse(huge); });
});

suite('css parseB', function(){
  bench('small2', function(){ parse(small); });
  bench('small2', function(){ parse(small); });
  //bench('large', function(){ parse(large); });
  //bench('huge', function(){ parse(huge); });
});
