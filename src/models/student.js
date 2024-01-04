const mongoose = require("mongoose");
const validator = require("validator");


const studentSchema = new mongoose.Schema({
    name : {
        type :String,
        require : true,
        minlength : 3
    },
    email:{
        type:String,
        require: true,
        unique:[true,"Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Error");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        
        required: true,
        unique:true
    },
    address:{
        type:String,
        required:true,

    }
});



//create a new collection using models
const student = new mongoose.model('student',studentSchema);
module.exports = student;