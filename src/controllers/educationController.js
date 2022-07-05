const educationService = require('../services/educationService');

const getedu = async(req, res) => {
    res.render('pages/education')
}

const createEducation = async(req, res) => {
    await educationService.createEducation(req)
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

module.exports = { getedu, createEducation }