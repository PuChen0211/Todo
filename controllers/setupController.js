/**
 * Created by puchen on 8/12/16.
 */
var Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        //seed database
        var starterTodos = [
            {
                username: 'Pu',
                todo: 'Write thesis',
                isDode: false,
                hasAttachment: false
            },
            {
                username: 'Pu',
                todo: 'Refine resume',
                isDode: false,
                hasAttachment: false
            },
            {
                username: 'Pu',
                todo: 'Practice leetcode',
                isDode: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        });
    });
}