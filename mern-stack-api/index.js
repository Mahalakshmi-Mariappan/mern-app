require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const uri = process.env.MONGO_URI;
console.log('MongoDB URI:', uri); // Add this line to check the URI

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongodb connection succeeded.');
  } catch (err) {
    console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2));
  }
}

connectDB();

app.listen(process.env.PORT || 4001, () => console.log(`Server started at : ${process.env.PORT || 4001}`));
