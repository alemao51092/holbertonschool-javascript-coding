#!/usr/bin/node
const fs = require('fs');
const rfile = process.argv[2];
fs.readFile(rfile, 'utf8', (err, inputD) => {
  if (err) throw err;
  console.log(inputD);
});
