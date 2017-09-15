/*!
 * Matcha - JSON Reporter
 * Copyright(c) 2016 Anna Henningsen <sqrt@entless.org>
 * MIT Licensed
 */
const fs = require('fs');

module.exports = function(saveTo, runner, utils) {
  var curSuite = null;
  var curBench = null;
  var runs = [];
  var isFirstRun = true;

  runner.on('start', function () {});
  runner.on('end', function (stats) { });

  runner.on('suite start', function (suite) {
    curSuite = suite.title;
  });

  runner.on('bench start', function (bench) {
    curBench = bench.title;
  });

  runner.on('bench end', function (results) {
    if(saveTo && /\.json$/.test(saveTo)) {
      let json;
      if(isFirstRun) {
        json = [{
          suite: curSuite,
          bench: curBench,
          results: results
        }];
      } else  {
        json = JSON.parse(fs.readFileSync(saveTo, 'utf8'));
        json.push({
          suite: curSuite,
          bench: curBench,
          results: results
        });
      }

      fs.writeFile(saveTo, JSON.stringify(json, null, '\t'), 'utf8', function(error) {
        if(error) { console.log(error); }
      });
    }

    isFirstRun = false;
  });
};
