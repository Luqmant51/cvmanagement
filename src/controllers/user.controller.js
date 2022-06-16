const userservice = require('../services/user.services')

const creatuser = async (req, res) => {
    const user = await userservice.creatuser(req)
    console.log(user);
    res.send(user)
}
const finduser = async (req, res) => {
    const user = await userservice.finduser(req)
    console.log(user);
    res.send(user)
}

module.exports = { creatuser, finduser }