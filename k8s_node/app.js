const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello from express");
})

app.listen(process.env.PORT,()=>{
    console.log(`Started server at port ${process.env.PORT}`);
});