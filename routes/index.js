var express = require('express');
var router = express.Router();
var con = require('../server/connection');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login', function(req, res, next) {
  // console.log(req.body);
  res.json({
    status:"success",
    message:"login"
  })
});


module.exports = router;
