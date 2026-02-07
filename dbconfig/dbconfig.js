
const mongoose = require('mongoose');

const connectUrl = 'mongodb+srv://ashifsirajkhan_db_user:pRsBLiF0P6GM15nh@usermanager.ttay3o5.mongodb.net/?appName=userManager'

mongoose.connect(connectUrl)
.then(()=>{
  console.log(`database is connected `);  
})
.catch((err)=>{
  console.log(err); 
})

