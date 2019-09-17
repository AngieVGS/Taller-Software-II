'use strict';
module.exports = function(app) {
    var listWorkActivities = require('../controllers/workActivityController');

    // todoList Routes
    app.route('/workActivity')
        .get(listWorkActivities.list_all_work_activities)
        .post(listWorkActivities.create_a_work_activity);

    //esto ya se encuentra en la base de datos y para obtenerlo ingresamos con el id 
    app.route('/workActivity/:workActivityId')
        .get(listWorkActivities.read_a_work_activity)
        .put(listWorkActivities.update_a_work_activity)
        .delete(listWorkActivities.delete_a_work_activity);
};