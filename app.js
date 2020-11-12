const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/newsletter",function(req,res){
    res.sendFile(__dirname + "/views/newsletter.html")
})

app.get("/registro",function(req,res){
    res.sendFile(__dirname + "/views/registro.html")
})

app.get("/ingreso",function(req,res){
    res.sendFile(__dirname + "/views/ingreso.html")
})

app.get("*",function(req,res){
    res.sendFile(__dirname + "/public/" + req.url)
})

app.listen(3000, function(){
    console.log("Para ver el sitio, ingresá a http://localhost:3000/")
})