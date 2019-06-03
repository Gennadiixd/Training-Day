const express = require('express');
const { sessionChecker } = require('../middleware/auth');
const User = require('../models/users');


const router = express.Router();
// route for Home-Page
router.get('/', (req, res) => {
  console.log('in')
});



module.exports = router;
