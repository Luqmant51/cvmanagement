const express = require('express')
const router = express.Router()

const user = require('../routes/user.routes');
const edu = require('../routes/education.routes');
const info = require('../routes/information.routes');
const obj = require('../routes/obj.routes');

const routes = [
    {
        path: '/',
        route: user
    },
    {
        path: '/edu',
        route: edu
    },
    {
        path: '/info',
        route: info
    },
    {
        path: '/obj',
        route: obj
    },
]

routes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router