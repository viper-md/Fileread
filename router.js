const express=require('express'),

      productcontroller = require('./controller/product');
    
module.exports=function(app){
         
    api = express.Router();
         

    app.use("/api",api);
    api.get("/products/count",productcontroller.productquery);
    api.get("/products" , productcontroller.productDisplay);

};