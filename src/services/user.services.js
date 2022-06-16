
const db = require('../models')

const creatuser = async (req) => {
    console.log("ok");
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const user = await db.user.create({ name, email, password })
    return user
}
const finduser = async (req) => {
    console.log("ok");
    const email = req.body.email
    const password = req.body.password
    const user = await db.user.findOne({ email, password })
    return user
}

module.exports = { creatuser, finduser }