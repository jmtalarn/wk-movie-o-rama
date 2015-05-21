var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'wk-video-o-rama' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'wk-video-o-rama' });
});
module.exports = router;
