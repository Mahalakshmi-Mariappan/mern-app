 
const mongoose = require('mongoose');


const dotenv = require('dotenv');
 // Load environment variables from .env file dotenv.config(); 
 // Use the environment variable for the MongoDB connection string 
const url = process.env.MONGO_URI; 
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (!err) {
    console.log('Mongodb connection succeeded.');
  } else {
    console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2));
  }
});
 
