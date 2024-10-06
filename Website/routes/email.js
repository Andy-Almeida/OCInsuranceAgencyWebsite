require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});

// Route to handle form submission
router.post('/UserQuoteSubmitted', function (req, res, next) {
  const { name, email, phone, service, message } = req.body;

  console.log('Post request received in email.js');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Service: ${service}`);
  console.log(`Message: ${message}`);

  const mailOptions = {
    from: {
      name: 'OC Insurance Company Quote Submission',
      address: 'test@openjavascript.info'
    },
    to: 'andy@isdg-inc.com',
    subject: 'New Quote Submission',
    text: `You have received a new quote submission with the following details:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `
  };
    
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: `An error occurred. Please try again later:${error}` });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Form submitted successfully!' });
  });
});

module.exports = router;