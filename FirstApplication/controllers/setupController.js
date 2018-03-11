var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        // seed db

        var starterTodos = [{
            username: "varun",
            todo: "finish nodejs basic",
            isDone: false,
            hasAttachment: false
        },
        {
            username: "arun",
            todo: "finish chatbot beta",
            isDone: false,
            hasAttachment: false
        },
        {
            username: "subha",
            todo: "finish GRE fundas",
            isDone: false,
            hasAttachment: false
        }];

        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
};