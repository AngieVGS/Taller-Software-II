
'use strict';

var WorkActivity = require('../models/workActivityModel');

exports.list_all_work_activities = function(req, res) {
    WorkActivity.getAllWorkActivities(function(err, workActivity) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', workActivity);
        res.send(workActivity);
    });
};


exports.create_a_work_activity = function(req, res) {
    var new_work_activity = new WorkActivity(req.body);

    //handles null error 
    if (!new_work_activity.name || !new_work_activity.surname || !new_work_activity.dedication ||
        !new_work_activity.working_hours) {

        res.status(400).send({ error: true, message: 'Please provide all information' });

    } else {

        WorkActivity.createWorkActivity(new_work_activity, function(err, workActivity) {

            if (err)
                res.send(err);
            res.json(workActivity);
        });
    }
};

exports.read_a_work_activity = function(req, res) {
    WorkActivity.getWorkActivityById(req.params.idwork_activity, function(err, workActivity) {
        if (err)
            res.send(err);
        res.json(workActivity);
    });
};


exports.update_a_work_activity = function(req, res) {
    WorkActivity.updateById(req.params.idwork_activity, new WorkActivity(req.body), function(err, workActivity) {
        if (err)
            res.send(err);
        res.json(workActivity);
    });
};


exports.delete_a_work_activity = function(req, res) {
    WorkActivity.remove(req.params.idwork_activity, function(err, workActivity) {
        if (err)
            res.send(err);
        res.json({ message: 'Work Activity successfully deleted' });
    });
};