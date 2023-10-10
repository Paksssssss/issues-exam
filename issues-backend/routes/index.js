const express = require('express')
const router = express.Router()
const issues = require('./issues')
const sampleIssues = require('./issues.json')

// define the home page route
router.get('/', (req, res) => {
	console.log(sampleIssues)
	res.send(sampleIssues)
})
// define the about route
router.use('/issues', issues)

module.exports = router