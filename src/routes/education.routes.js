const express = require('express');
const router = express.Router()
const usercontroller = require('../controllers/education.controller')

router
    .route('/')
    .get(usercontroller.getAlledu)
    .post(usercontroller.createedu)

module.exports = router