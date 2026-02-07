

const express = require('express')

const userRouting = require('./router/userRouting.js');
const app = express();
const port = 4000;

const cors = require('cors');
require('./dbconfig/dbconfig.js')
app.use(express.json());

app.use(cors())



app.use('/', userRouting)

app.listen(port,()=>{
  console.log(`server is started on port ${port}`);
})