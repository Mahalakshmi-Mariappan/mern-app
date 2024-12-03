 
const mongoose = require('mongoose');


require('dotenv').config();
console.log('MongoDB URI:', process.env.MONGO_URI); // Check if the URI is being read correctly

const url = process.env.MONGO_URI; 
await mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'admin',
  replicaSet: 'atlas-3x2o5m-shard-0',
  ssl: true,
  appName: 'Cluster0'
}
, (err) => {
  if (!err) {
    console.log('Mongodb connection succeeded.');
  } else {
    console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2));
  }
});
 
