const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/contacto",function(req,res){
    res.sendFile(__dirname + "/views/contacto.html")
})

app.get("*",function(req,res){
    res.sendFile(__dirname + "/public/" + req.url)
})

app.listen(3000, function(){
    console.log("hola")
})