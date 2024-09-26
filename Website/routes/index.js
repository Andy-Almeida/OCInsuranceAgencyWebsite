var express = require('express');
var router = express.Router();

var HeroPhoneBasic = 'Call: 1(949)836-6193'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contents/index', { herohead: 'World-Class Service Since 1984p', herosub: HeroPhoneBasic, heroimg: './images/heros/sunsetfour.jpg' });
});

/* GET GetAQuote. */
router.get('/GetAQuote', function(req, res, next) {
  res.render('contents/getaquote', { herohead: 'Get in contact with us!', herosub: HeroPhoneBasic, heroimg: './images/heros/onthephone.jpg' });
});

/* POST GetAQuote. */
router.post('/UserQuoteSubmitted', function(req, res, next) {
});

module.exports = router;
