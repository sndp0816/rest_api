const express = require("express");

require("./DB/connection");
const student = require("./models/student");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello form backend1");
});

app.post("/student",(req,res)=>{
    console.log(req.body);
    const user = new student(req.body);
    user.save().then(()=>
    {
        res.status(201);
        res.send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    //res.send("hello form backend");
});

app.listen(port,()=>{
    console.log(`connection is set on ${port}`);
});