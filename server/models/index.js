const path = require('path')
const fs = require('fs')
const config = require('../config')

const Sequelize = require('sequelize')
const db = {}
    //创建链接
const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.options
)

//const User = sequelize.import('./User.js')

fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

db.Sequelize = Sequelize
db.sequelize = sequelize

console.log(db)
module.exports = db