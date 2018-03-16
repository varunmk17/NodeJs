var jwt = require('jsonwebtoken');
var config = require('../config');

function verifyToken(req, res, next){
    var token = req.headers['x-access-token'];
    if(!token) return res.send({auth: false, message: 'no token'});

    jwt.verify(token, config.secret, function(err, decoded) {
        if(err) return res.send({auth: false, message: 'invalid token'});
        
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;