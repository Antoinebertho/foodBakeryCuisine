// const app = require("./app");
// const http = require('http');

const express = require("express");
const mongoose= require('mongoose');

require('dotenv').config()

const courseRouter = require("./routes/courseRoute");
const userRouter = require("./routes/userRoute");
const subscriberRouter = require("./routes/subscriberRoute");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

const {API_PORT} = process.env;
const port = process.env.PORT || API_PORT;

main().catch(err => console.log(err));

async function main() {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to MongoDB');
    }
  
  app.use('/api/courses',courseRouter)
  app.use('/api/users', userRouter)
  app.use('/api/subscribers', subscriberRouter)
  app.listen(port, ()=>console.log(`Listening on port ${port}`));
