const infoservice = require('../services/info.service');

const createinf = async (req, res) => {
    await infoservice.createinfo(req)
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

const getinfo = async (req, res) => {
    await infoservice.getinfo(req)
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

module.exports = { createinf, getinfo }