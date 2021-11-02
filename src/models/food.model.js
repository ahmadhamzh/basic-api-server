'use strict'


const Food = (sequelize,DataTypes)=> sequelize.define('food',{
foodName : {
    type : DataTypes.STRING,
    allowNULL : false
},
dishType : {
    type : DataTypes.STRING
} 

});

module.exports = Food