#!/usr/bin/node
const fs = require('fs')
fs.readFile('cisfun', (err, inputD) => {
    if (err) throw err;
    console.log(inputD.toString());
})