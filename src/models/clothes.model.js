'use strict'


const Clothes = (sequelize,DataTypes)=> sequelize.define('clothes', {
    clotheName : {
        type : DataTypes.STRING,
        allowNULL : false
    },
    price : {
        type : DataTypes.INTEGER
    }
})

module.exports = Clothes