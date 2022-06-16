const objservice = require('../services/obj.services')

const createobj = async (req, res) => {
    await objservice.crobj(req)
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

module.exports = { createobj }