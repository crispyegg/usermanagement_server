

const express = require('express');

const userModel = require('../model/userModel');

const userRouting = express.Router();

userRouting.post('/users', async(req,res)=>{
  try{
    const userData = new userModel(req.body);
    const result = await userData.save();

    if(result._id){
      res.send('User Record Added')
    }else{
      res.send('unable to Insert user Data')
    }
  }
  catch(err){
    res.send(err)
  }
})

userRouting.get('/users',async(req,res)=>{
  try{
     const result = await userModel.find()
     if(result.length>0){
      res.send(result);
    }else{
      res.send('no record found');
    }
  }
  catch(err){
    res.send(err)
  }
})

userRouting.delete('/users/:uid',async(req,res)=>{
  try{
    const  uid = req.params.uid;
  const result = await userModel.deleteOne({_id:uid})
   if(result.deletedCount>0){
      res.send('Record Deleted')
    }else{
      res.send('Unable to Deleted Record');
    }
  }
  catch(err){
    res.send(err)
  }
})

userRouting.get('/users/:uid',async (req,res)=>{
  try{
    const uid=req.params.uid;
    const result = await userModel.findOne({_id:uid});  
    if(result){
      res.send(result);
    }else{
      res.send('no record found')
    }
  }catch(err){
    res.send(err)
  }
})

userRouting.put('/users/:uid',async (req,res)=>{
  try{
    const uid =req.params.uid;
    const result = await userModel.updateOne({_id:uid}, {$set:req.body})
    if(result.modifiedCount>0){
      res.send('record Updated');
    }else{
      res.send('unable to update Record');
    }
  }catch(err){
    res.send(err)
  }
})


module.exports = userRouting;