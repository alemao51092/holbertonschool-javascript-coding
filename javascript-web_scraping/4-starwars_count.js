#!/usr/bin/node
const request = require('request');
const apiMovie = process.argv[2];
request.get(apiMovie, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  let characterFilms = 0;
  const movies = JSON.parse(body).results;
  // we travel across each movie
  movies.forEach(movie => {
    movie.characters.forEach(character => {
      if (character.includes('/people/18')) characterFilms++;
    });
  });
  console.log(characterFilms);
});
