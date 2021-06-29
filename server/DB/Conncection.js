const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.URI);
const URI = 'mongodb+srv://dbUser:12345@cluster0.db3ui.mongodb.net/meanApp';
console.log(URI, 'HI');
const connectDB = async () => {
  console.log('hi');
  try{
  await mongoose.connect(URI , {
  useNewUrlParser: true ,
  useUnifiedTopology : true
  });
  console.log('db connected..!');
 }
 catch(err){
   console.log('error', err);
 }

};

module.exports = connectDB;

// mongodb+srv://<username>:<password>@cluster0.add4s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority