var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET GetAQuote. */
router.get('/GetAQuote', function(req, res, next) {
  res.render('getaquote', { title: 'Express' });
});

/* POST GetAQuote. */
router.post('/UserQuoteSubmitted', function(req, res, next) {
});

module.exports = router;
