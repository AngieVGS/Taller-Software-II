// pedir la libreria que se i
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', function(req, res) {
    res.send('Hello World!');
});

var connection = mysql.createConnection({
    host: 'cloudcomputing.chej1icjeheb.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: '1234cloud',
    database: 'sw2_UPTC_EISC_Tunja'
});

connection.connect();

//libreria express y se usa para configurar el comportamiento del post y request
app.listen(port, function() {
    console.log('API server started on: ' + port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//se automatiza para que la aplicacion sea asincron y pueda atender varios procesos
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

var activityRoutes = require('./routes/activityRoutes');
var workActivityRoutes = require('./routes/workActivityRoutes');
activityRoutes(app);
workActivityRoutes(app);