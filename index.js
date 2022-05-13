const express = require('express');
const app = express();
const port = 5000;

const users = [
    {id:0,name:'Dulal',age:24,email:"dulal@gmail.com"},
    {id:1,name:'Raihan',age:24,email:"Raihan@gmail.com"},
    {id:2,name:'Juwel',age:24,email:"juwel@gmail.com"},
    {id:3,name:'Asif',age:24,email:"asif@gmail.com"},
    {id:4,name:'Rahat',age:24,email:"rahat@gmail.com"},
]

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.get('/users',(req,res)=>{
//console.log("users");
res.send(users);
});
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port,()=>{
    console.log("setup done");
})