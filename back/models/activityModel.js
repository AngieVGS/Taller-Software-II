'user strict';
var sql = require('../db');

//Task object constructor
var Activity = function(activity) {
    this.name = activity.name;
    this.surname = activity.surname;
    this.activity = activity.activity;
    this.practicing_hours = activity.practicing_hours;
};

Activity.createActivity = function createUser(activity, result) {
    sql.query("INSERT INTO Hobby set ?", activity, function(err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Activity.getActivityById = function createUser(activityId, result) {
    sql.query("SELECT * from Hobby  where id_student = ? ", activityId, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};

Activity.getAllActivities = function getAllActivities(result) {
    sql.query("Select * from Hobby", function(err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Activities : ', res);
            result(null, res);
        }
        
    });
};

Activity.updateById = function(id_activity, activity, result) {
    sql.query("UPDATE Hobby SET name = ?, surname = ?, activity = ?,practicing_hours = ? where id_student = ?", [activity.name, activity.surname, activity.activity, activity.practicing_hours, id_activity], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Activity.remove = function(id_activity, result) {
    sql.query("DELETE FROM Hobby WHERE id_student = ?", [id_activity], function(err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {

            result(null, res);
        }
    });
};

module.exports = Activity;