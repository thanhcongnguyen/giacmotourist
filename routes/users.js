var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('users');
});

router.get('/login', function(req, res, next){
    res.send('get login');
});

router.post('/login', function(res, res, next){
    res.send('post login');
})

router.get('/register', function(req, res, next){
    res.send('get register');
});

router.post('/register', function(req, res, next){
    res.send('post register');
});

router.get('/logout', function(req, res, next){
    res.send('/get logout');
});

router.get('/recoverypassword', function(req, res, next){
    res.send('/get recovery password');
});


module.exports = router;