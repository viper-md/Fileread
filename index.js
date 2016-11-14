const express = require("express");
const app =express();
const Sequelize=require('sequelize');
const sequelize = new Sequelize('postgres://mukul:newPassword@localhost:5432/mukul');
const read=require("./utility/read")
const router = require('./router')
const port=3000;
 
app.listen(port,()=>{ console.log("working")});
 
router(app);