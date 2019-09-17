'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/activityController');

    // todoList Routes
    app.route('/activity')
        .get(todoList.list_all_activities)
        .post(todoList.create_a_activity);

    //esto ya se encuentra en la base de datos y para obtenerlo ingresamos con el id 
    app.route('/activity/:activityId')
        .get(todoList.read_a_activity)
        .put(todoList.update_a_activity)
        .delete(todoList.delete_a_activity);
};