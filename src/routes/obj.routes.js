const express = require('express');
const router = express.Router()
const objcontroller = require('../controllers/obj.controller')

router
    .route('/')
    .post(objcontroller.createobj)

module.exports = router