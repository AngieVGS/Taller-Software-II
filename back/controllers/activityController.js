'use strict';

var Activity = require('../models/activityModel');

exports.list_all_activities = function(req, res) {
    Activity.getAllActivities(function(err, activity) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', activity);
        res.send(activity);
    });
};


exports.create_a_activity = function(req, res) {
    var new_activity = new Activity(req.body);

    //handles null error 
    if (!new_activity.name || !new_activity.surname || !new_activity.activity ||
        !new_activity.practicing_hours) {

        res.status(400).send({ error: true, message: 'Please provide all information' });

    } else {

        Activity.createActivity(new_activity, function(err, activity) {

            if (err)
                res.send(err);
            res.json(activity);
        });
    }
};

exports.read_a_activity = function(req, res) {
    Activity.getActivityById(req.params.activityId, function(err, activity) {
        if (err)
            res.send(err);
        res.json(activity);
    });
};


exports.update_a_activity = function(req, res) {
    Activity.updateById(req.params.activityId, new Activity(req.body), function(err, activity) {
        if (err)
            res.send(err);
        res.json(activity);
    });
};


exports.delete_a_activity = function(req, res) {

    Activity.remove(req.params.activityId, function(err, activity) {
        if (err)
            res.send(err);
        res.json({ message: 'Activity successfully deleted' });
    });
};