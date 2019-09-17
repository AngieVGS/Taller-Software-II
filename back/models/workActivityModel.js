'user strict';
var sql = require('../db');

//Task object constructor
var WorkActivity = function(workActivity) {
    this.name = workActivity.name;
    this.surname = workActivity.surname;
    this.dedication = workActivity.dedication;
    this.working_hours = workActivity.working_hours;
};

WorkActivity.createWorkActivity = function createUser(workActivity, result) {
    sql.query("INSERT INTO work_activity set ?", workActivity, function(err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

WorkActivity.getWorkActivityById = function createUser(idwork_activity, result) {
    sql.query("SELECT * from work_activity  where idwork_activity = ? ", idwork_activity, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};

WorkActivity.getAllWorkActivities = function getAllWorkActivities(result) {
    sql.query("Select * from work_activity", function(err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Work Activities : ', res);
            result(null, res);
        }
        
    });
};

WorkActivity.updateById = function(idwork_activity, workActivity, result) {
    sql.query("UPDATE work_activity SET name = ?, surname = ?, dedications = ?,working_hours = ? where idwork_activity = ?", [workActivity.name, workActivity.surname, workActivity.dedication, workActivity.practicing_hours], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

WorkActivity.remove = function(idwork_activity, result) {
    sql.query("DELETE FROM work_activity WHERE idwork_activity = ?", [idwork_activity], function(err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {

            result(null, res);
        }
    });
};

module.exports = WorkActivity;