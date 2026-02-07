
const mongoose = require('mongoose');

const connectUrl = 'mongodb://localhost:27017/userManager'

mongoose.connect(connectUrl)
.then(()=>{
  console.log(`database is connected `);  
})
.catch((err)=>{
  console.log(err); 
})

