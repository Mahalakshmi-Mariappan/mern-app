 
const mongoose = require('mongoose');
const url ="mongodb+srv://mern-stack-1:YHwn2qlqfQIHHB3P@post.tiifp.mongodb.net/mern-app?retryWrites=true&w=majority&appName=post"
//mongodb://127.0.0.1:27017/postManagerDB
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
 