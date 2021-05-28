const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use((bodyParser.urlencoded({extended:true})));

//routes
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>{
    res.send(`addition is ${parseInt(req.body.num1)+parseInt(req.body.num2)}`);
});

app.get("/bmiCalculator",(req,res)=>{
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmiCalculator",(req,res)=>{
    let height = parseFloat(req.body.ht);
    let weight = parseFloat(req.body.wt);
    let result = weight/(height*height);
    res.send(`the resulting bmi is ${result}`);
});

// server 
app.listen(3000,()=>{
    console.log("server started");
});
