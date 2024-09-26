var express = require('express');
var router = express.Router();

var HeroPhoneBasic = 'Call: 1(949)836-6193'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contents/index', { herohead: 'World-Class Service Since 1984', herosub: HeroPhoneBasic, heroimg: './images/FirstLogo.png' });
});

/* GET GetAQuote. */
router.get('/GetAQuote', function(req, res, next) {
  res.render('contents/getaquote', { title: 'Express' });
});

/* POST GetAQuote. */
router.post('/UserQuoteSubmitted', function(req, res, next) {
});

module.exports = router;
