
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
      firstName:{
        type:String,
        required:true,
      },
      lastName:{
        type:String,
        required:true,
      },
      phone:{
        type:Number,
        required:true,
      },
       email:{
        type:String,
        required:true,
      },
        // Optional / future fields
        dob: {
          type: Date
        },
        address: {
          type: String
        }
      
    

})

module.exports= mongoose.model('usersData',userSchema)