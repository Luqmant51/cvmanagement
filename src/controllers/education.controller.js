const eduser = require('../services/edu.sercices');

const getAlledu = async (req, res) => {
    const findUser = await db.education.findAll()
    console.log(user);
    res.send(findUser)
}

const createedu = async (req, res) => {
    await eduser.eduserr(req)
    .then((result) => {
        if (result) {
            console.log(result);
            res.send(result)
        }
    }).catch((err) => {
        console.log(err);
        res.send(err)
    });

}

module.exports = { getAlledu, createedu }