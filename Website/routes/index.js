var express = require('express');
var router = express.Router();

var HeroPhoneBasic = 'Call: +1(949)836-6193'

function GetFunc(path, view, herohead, herosub, heroimg) {
  router.get(path, function(req, res, next) {
    res.render(view, { herohead: herohead, herosub: herosub, heroimg: heroimg });
  });
}

GetFunc('/', 'contents/index', 'World-Class Service Since 1984', HeroPhoneBasic, './images/heros/sunsetfour.jpg');
GetFunc('/GetAQuote', 'contents/getaquote', 'Get in contact with us!', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/GeneralLiability', 'contents/generalliability', 'General Liability', HeroPhoneBasic, './images/heros/coffeehands.jpg');
GetFunc('/Automotive', 'contents/automotive', 'Automotive', HeroPhoneBasic, './images/heros/desertcarman.jpg');
GetFunc('/CommercialVehicles', 'contents/commercialvehicles', 'Commercial Vehicles', HeroPhoneBasic, './images/heros/icecreamtruckman.jpg');
GetFunc('/Home', 'contents/home', 'Home', HeroPhoneBasic, './images/heros/homefall.jpg');
GetFunc('/Motorcycle', 'contents/motorcycle', 'Motorcycle', HeroPhoneBasic, './images/heros/motorcycleview.jpg');
GetFunc('/OurCompany', 'contents/ourcompany', 'Our Company', HeroPhoneBasic, './images/heros/twopeoplelaptop.jpg');
GetFunc('/OurTeam', 'contents/ourteam', 'Our Team', HeroPhoneBasic, './images/heros/theteam.jpg');
GetFunc('/CustomerReviews', 'contents/customerreviews', 'Customer Reviews', HeroPhoneBasic, './images/heros/handshake.jpg');
GetFunc('/Espanol', 'contents/espanol', 'Español', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/KnowledgeBase', 'contents/knowledgebase', 'Knowledge Base', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/InsuranceFAQs', 'contents/index', 'Insurance FAQs', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/HelpfulLinks', 'contents/helpfullinks', 'Helpful Links', HeroPhoneBasic, './images/heros/onthephone.jpg');
GetFunc('/Glossary', 'contents/index', 'Glossary', HeroPhoneBasic, './images/heros/onthephone.jpg');

module.exports = router;
