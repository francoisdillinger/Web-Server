module.exports = {
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