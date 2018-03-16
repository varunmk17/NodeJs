var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var VerifyToken = require('./VerifyToken');

router.use(bodyparser.urlencoded({extended: false}));
router.use(bodyparser.json());

var User = require('../user/User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');


router.post('/register', function(req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword    
    }, function(err, user) {
            if(err) throw err;

            // create a token
            var token = jwt.sign({id: user._id}, config.secret, {
                expiresIn: 86400});
            
            res.send({auth: true, token: token});
    });
});

router.get('/me', VerifyToken, function(req, res, next) {

    User.findById(req.userId, {password: 0}, function(err, user) {
        if(err) throw err;
        if(!user) return res.send("No user found!");
        res.send(user);
    });
});

router.post('/login', function(req, res) {

    User.findOne({ email: req.body.email}, function(err, user){
        if(err) return res.send('Error');
        if(!user) return res.send('No user found');
        
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid)
            return res.send({auth: false, token: null});

        var token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 86400
        });

        res.send({ auth: true, token: token});

    });
});

router.get('/logout', function(req, res) {
    res.send({ auth: false, token: null });
});

router.use(function(user, req, res, next){
    res.send(user);
});

module.exports = router;