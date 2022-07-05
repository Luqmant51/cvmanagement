const express = require('express');
const router = express.Router()
const usercontroller = require('../controllers/userController')
const auth = require('../middlewares/auth')

router
    .route('/sign-up')
    .post(usercontroller.creatUser)
    .get(usercontroller.finduser)

router
    .route('/login')
    .get(usercontroller.getpage)
    .post(auth,usercontroller.login)

module.exports = router