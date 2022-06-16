const express = require('express');
const router = express.Router()
const usercontroller = require('../controllers/user.controller')

router
    .route('/')
    .post(usercontroller.creatuser)
    .post(usercontroller.finduser)

module.exports = router