const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://mukul:newPassword@localhost:5432/mukul');

var product = sequelize.define('product',{
    pid : {type: Sequelize.INTEGER},
    sin :Sequelize.INTEGER,
    pos: Sequelize.INTEGER
});
//product.sync({force:true});
module.exports=product;

// creatind dummy data

//product.sync({force: true});