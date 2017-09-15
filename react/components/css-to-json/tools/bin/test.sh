#!/bin/bash

rm -rf $PWD/testresults/*.xml
mkdir $PWD/testresults/

echo "[RUNNING JEST] $PWD";
npm run jest

echo "[RUNNING SAUCELABS] $PWD";
npm run mocha:saucelabs