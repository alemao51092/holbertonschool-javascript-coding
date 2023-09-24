#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const completedTasks = {};
  const todo = JSON.parse(body);
  todo.forEach(task => {
    if (task.completed) {
      // we enter in a loop of completed:true
      if (!completedTasks[task.userId]) completedTasks[task.userId] = 1;
      // if at the moment there is no completed taks, we initiate the kv pair with a 1
      else completedTasks[task.userId] += 1;
      // else, we increment the value of the key (task is every dict, and userId is, of course , the id of the user.)
    }
  });
  console.log(completedTasks);
});
