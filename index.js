
/*
const fs=require("fs");
const  supervillains=require("supervillains");
const superheroes = require('superheroes');
let sup=superheroes.random();
let vil=supervillains.random();
const subham =require("./second");// this is know as common js module
console.log("hello this is ",subham,"45");
fs.copyFileSync("file1.txt","file2.txt");
console.log(sup);
console.log(vil);

*/

const { response } = require("express");
const express =require("express");
const app =express();
app.get("/",function(req,res){
   res.send("<h1>hellow World <h1/>");
});

// req---> request and res----> respons

app.get("/contact",function(req,res){
    res.send("contact me on vimalkantlive@gmail.com");
});

app.get("/about",function(req,res){
    res.send("hi this is vimal kant yadav");
});

app.listen(3000,function(){console.log("start a servert 3000")});