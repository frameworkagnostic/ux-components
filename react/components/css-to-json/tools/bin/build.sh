rm -rf ./dist
mkdir -p $PWD/dist

echo "[RUNNING WEBPACK] $PWD";
npm run webpack

echo "[RUNNING BABEL] $PWD";
npm run es5