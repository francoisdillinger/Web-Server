var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('Private route hit!');
        next();
    },
    logger: function(req, res, next){
        var date = new Date().toDateString();
        var requestMessage = 'Requested: ' + req.method + ' ' + req.originalUrl + ' on ' + date + '!';
        console.log(requestMessage);
        next();
    }
};

app.use(middleware.logger);


app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('All about us!');
});

app.use(express.static(__dirname + '/public'));

// console.log(__dirname);
app.listen(PORT, function(){
    console.log("I'm running bro! On Port: " + PORT + '!');
});