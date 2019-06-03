const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users')
const { sessionChecker } = require('../middleware/auth');

// route for user logout
router.get('/logout', async (req, res, next) => {
  
});

module.exports = router;
