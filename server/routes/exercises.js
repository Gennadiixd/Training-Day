const express = require('express');
const { sessionChecker } = require('../middleware/auth');
const User = require('../models/users');
const Exercise = require('../models/exersices');
const Heatup = require('../models/heatup');
const Assesment = require('../models/assesments');
const router = express.Router();

router.post('/test', async function (req, res, next) {
  console.log(req.body)
  for (let i = 0; i < req.body.length; i++) {
    let heatup = new Heatup({
      name: req.body[i].name,
      img: req.body[i].img,
      duration: req.body[i].duration,
    })
    await heatup.save()
    console.log('saved')
  }
  res.send('connected');
});

router.get('/heatup', async function (req, res, next) {
  let exercises = await Heatup.find()
  res.send(exercises  )
});

router.get('/training', async function (req, res, next) {
  let exercises = await Exercise.find()
  res.send(exercises)
});

router.get('/assesment', async function (req, res, next) {
  let exercises = await Assesment.find()
  res.send(exercises)
});

module.exports = router;
