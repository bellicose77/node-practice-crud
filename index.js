const express = require('express');
const app = express();
const port = 5000;

const users = [
    
]

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.listen(port,()=>{
    console.log("setup done");
})