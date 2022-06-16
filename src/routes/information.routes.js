const express = require('express');
const router = express.Router()
const usercontroller = require('../controllers/info.controller')

router
    .route('/')
    .get(usercontroller.getinfo)
    .post(usercontroller.createinf)

module.exports = router