#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const apiUrl = process.argv[2];

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile(process.argv[3], body, (err, data) => {
    if (err) {
      console.log(err);
    }
  });
});
