var express = require('express');
var todoRepository = require('./todo.repository');
var app = express();


const PORT = 3000;

app.get('/todos', function(req, res){
  todoRepository.list().then(function(todos){
    res.json(todos);
  });
});

app.get('/todos/:todoId', function(req, res){
  todoRepository.getById(req.params.todoId).then(function(todo){
    res.json(todo);
  });
});

app.post('/todos', function(req, res){
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    todoRepository.create(JSON.parse(body)).then(function(todo){
      res.json(todo);
    });   
  });
});

app.put('/todos', function(req, res){
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    var todo = JSON.parse(body);
    todoRepository.update(todo.id, todo).then(function(count){
      res.send('todos updated: ' + count);
    });   
  });
});

app.delete('/todos/:todoId', function(req, res){
  todoRepository.remove(req.params.todoId).then(function(){
    res.sendStatus(200);
  });
});

app.listen(PORT, 'localhost', function() {
  console.log('server started at port ' + PORT);
});