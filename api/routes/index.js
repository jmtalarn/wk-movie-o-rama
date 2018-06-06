var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'wk-video-o-rama' });
  res.redirect("/app");

});
router.get('/app', function(req, res, next) {
  res.render('app', { title: 'wk-video-o-rama' });
});
router.get('/app*', function(req, res, next) {
  res.render('app', { title: 'wk-video-o-rama' });
});
module.exports = router;
