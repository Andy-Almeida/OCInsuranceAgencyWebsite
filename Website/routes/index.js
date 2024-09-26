var express = require('express');
var router = express.Router();

var HeroPhoneBasic = 'Call: 1(949)836-6193'

function GetFunc(path, view, herohead, herosub, heroimg) {
  router.get(path, function(req, res, next) {
    res.render(view, { herohead: herohead, herosub: herosub, heroimg: heroimg });
  });
}

GetFunc('/', 'contents/index', 'World-Class Service Since 1984', HeroPhoneBasic, './images/heros/sunsetfour.jpg');
GetFunc('/GetAQuote', 'contents/getaquote', 'Get in contact with us!', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/GeneralLiability', 'contents/index', 'General Liability', HeroPhoneBasic, './images/heros/coffeehands.jpg');
GetFunc('/Automotive', 'contents/index', 'Automotive', HeroPhoneBasic, './images/heros/desertcarman.jpg');
GetFunc('/CommercialVehicles', 'contents/index', 'Commercial Vehicles', HeroPhoneBasic, './images/heros/icecreamtruckman.jpg');
GetFunc('/Home', 'contents/index', 'Home', HeroPhoneBasic, './images/heros/homefall.jpg');
GetFunc('/Motorcycle', 'contents/index', 'Motorcycle', HeroPhoneBasic, './images/heros/motorcycleview.jpg');
GetFunc('/OurCompany', 'contents/index', 'Our Company', HeroPhoneBasic, './images/heros/twopeoplelaptop.jpg');
GetFunc('/OurTeam', 'contents/index', 'Our Team', HeroPhoneBasic, './images/heros/theteam.jpg');
GetFunc('/CustomerReviews', 'contents/index', 'Customer Reviews', HeroPhoneBasic, './images/heros/handshake.jpg');
GetFunc('/Espanol', 'contents/index', 'Español', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/KnowledgeBase', 'contents/index', 'Knowledge Base', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/InsuranceFAQs', 'contents/index', 'Insurance FAQs', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/HelpfulLinks', 'contents/index', 'Helpful Links', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/Glossary', 'contents/index', 'Glossary', HeroPhoneBasic, './images/heros/onthephone.jpg');

/* POST GetAQuote. */
router.post('/UserQuoteSubmitted', function(req, res, next) {
});

module.exports = router;
