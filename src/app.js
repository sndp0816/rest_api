const express = require("express");

require("./DB/connection");
const student = require("./models/student");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello form backend1");
});

// app.post("/student",(req,res)=>{
//     console.log(req.body);
//     const user = new student(req.body);
//     user.save().then(()=>
//     {
//         res.status(201);
//         res.send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
//     //res.send("hello form backend");
// });


//Create using Async & await

app.post("/student",async(req,res)=>{
    try{
    const user = new student(req.body);
    const Createuser = await user.save();
    res.status(201).send(Createuser);
    }catch(e){
        res.status(400).send(e);
    }
});

//find the in data collection 
app.get("/student",async(req,res)=>{
    try{

        const studentData = await student.find();
        res.send(studentData);

    }catch(e){
        res.status(400).send(e);
    }
});

// find in individual student data
app.get("/student/:id",async(req,res)=>{
    try{

        const _id = req.params.id;
        const idData = await student.findById(_id);
        console.log(idData);

        if(!idData){
            return res.status(404).send();
        }else{
            res.send(idData)
        }

    }catch(e){
        res.status(500).send(e);
    }
});


//delete the students form data
app.delete("/student/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteStudent = await student.findByIdAndDelete(id); 

        if(!req.params.id){
            return res.statusCode(400).send;
        }else{
            res.send(deleteStudent);
        }

    }catch(e){
        res.status(500).send(e);
    }
});

//Update the data
app.patch("/student/:id",async(req,res)=>{

    try{
    const _id = req.params.id;
    const updateStudent = await student.findByIdAndUpdate(_id,req.body,{
        new:true
    });

    if(!req.params.id){
        return res.statusCode(400).send;
    }else{
        res.send(updateStudent);
    }}
    catch(e){
        res.status(500).send(e);
    }


});

app.listen(port,()=>{
    console.log(`connection is set on ${port}`);
});