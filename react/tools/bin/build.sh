rm -rf ./dist
mkdir -p $PWD/dist

npm run webpack

node $PWD/node_modules/babel-cli/bin/babel $PWD/src --out-dir $PWD/dist/es5  --copy-files
