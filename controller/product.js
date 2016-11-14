const product = require('../models/product');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://mukul:newPassword@localhost:5432/mukul');


exports.productDisplay = function(req,res){
         product.findAll().then((products)=>{
                 res.json(products);
         })
}

exports.productquery = function(req,res){

      sequelize.query("SELECT pid , SUM(pos) FROM products GROUP BY pid", { type: sequelize.QueryTypes.SELECT})
                .then(function(users) {
                        res.json(users);
     
  })
   
}
