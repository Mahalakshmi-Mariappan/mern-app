 
const mongoose = require('mongoose');
const uri = "mongodb+srv://mern-stack-1:YHwn2qlqfQIHHB3@post.tiifp.mongodb.net/mern-app?retryWrites=true&w=majority&appName=post";
//mongodb://127.0.0.1:27017/postManagerDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (!err) {
    console.log('Mongodb connection succeeded.');
  } else {
    console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2));
  }
});
 
