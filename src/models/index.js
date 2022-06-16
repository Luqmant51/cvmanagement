const { Sequelize, DataTypes } = require('sequelize');

const conn = new Sequelize('maincv', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true,
    }
})

const db = {}

db.DataTypes
db.conn
db.education = require('./education.model')(conn, DataTypes)
db.header = require('./header.model')(conn, DataTypes)
db.information = require('./information.model')(conn, DataTypes)
db.language = require('./language.model')(conn, DataTypes)
db.objective = require('./objective.model')(conn, DataTypes)
db.skill = require('./skill.model')(conn, DataTypes)
db.user = require('./user.model')(conn, DataTypes)
db.work = require('./work.model')(conn, DataTypes)



module.exports = db