const express = require('express');
const router = express.Router()
const temp = require('../controllers/templetController')

router
    .route('/')
    .get(temp.temp)

module.exports = router