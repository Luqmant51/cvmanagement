const db = require('../models');
const Header = db.header;



//Create Category
const createHeader = async (req) => {

    // console.log(name + '=' + img) just checking its cooming 

    // after checking making req to create category in db
    const newHeader = await Header.create({
        user_id: req.body.user_id,
        name: req.body.name,
        // Image: req.file.filename,
        professional: req.body.professional
    })
    return newHeader // return the value to controller


}

//Create Category
const singleHeader = async (req,res) => {

       console.log(res.locals.id)
    const oneHeader = await Header.findOne({ where: { user_id: res.locals.id } })
    return oneHeader // return the value to controller

}




module.exports = {
    createHeader,
    singleHeader
}