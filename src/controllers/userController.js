const userService = require('../services/userServices')
const finduser = async(req, res) => {
    res.render('pages/signup')
}

const creatUser = async(req, res) => {
    await userService.addUser(req)
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.send(error)
        })
}

const getpage = async(req,res)=>{
    // res.render('pages/signin')
}

const login = async(req, res) => {
    await userService.loginUser(req)
        .then((result) => {
            console.log(result);
            res.send(result)
        })
        .catch((error) => {
            res.send(error)
        })

}
module.exports = { creatUser, finduser, login,getpage }