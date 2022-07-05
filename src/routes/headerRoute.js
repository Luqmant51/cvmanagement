const express = require('express');
const controller = require('../controllers/headerController')
const upload = require('../middlewares/upload')
const auth = require('../middlewares/auth')
const router = express.Router();


router
    .route('/add-header')
    .post(upload, controller.addHeader)

router
    .route('/get-header')
    .get(auth,controller.singleHeader)

module.exports = router