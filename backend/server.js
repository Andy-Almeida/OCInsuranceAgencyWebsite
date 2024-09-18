require('dotenv').config()

// Call packages here
const express = require('express')

// Express app started
const app = express()

// Routes
app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})
// Listen for requests
app.listen(process.env.PORT, () => {
	console.log('listening on port', process.env.PORT)
})
