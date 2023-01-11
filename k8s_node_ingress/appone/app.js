const express = require('express');
const app = express();

app.get("/appone/",(req,res)=>{
    res.send("Index");
});

app.get("/appone/home",(req,res)=>{
    res.send("Homepage");
});

app.get("/appone/dashboard",(req,res)=>{
    res.send("Dashboard");
});

app.get("/appone/test ",(req,res)=>{
    res.send("Test page");
});

app.listen(11111,()=>{
    console.log("Started server at port 11111");
})