const express=require(`express`);
const users= require("./MOCK_DATA.json")
const app=express();

app.get("/",function(req,res){
    res.send("Welcme to home Page")
})

app.get("/users",function(req,res){
    res.send(users);
})

app.listen(2345, function(){
     console.log("Listening");
})