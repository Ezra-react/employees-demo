var express = require('express');  
var mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Employee = require('./models/Employee');
require("dotenv").config();

var mongoDB = process.env.MONGODBURI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", () => {console.log("connected to database.", )})

var app = express();  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 


app.get('/employee', function (req, res) {  
  res.send('Welcome to JavaTpoint!');  
});  

app.post("/employee", async (req, res) => {
  const response = await new Employee({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number
  }).save();

  res.status(200).send(response);
});


app.get("/employees", async (req, res) => {
  const response = await Employee.find({});

  res.status(200).send(response);
});

app.get("/employees/:id", async (req, res) => {
  const response = await Employee.find({_id: req.params.id});

  res.status(200).send(response);
});

app.put("/employee/:id", async (req, res) => {
  const filter = { _id: req.params.id };

  const update = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number
  };

  let doc = await Employee.findOneAndUpdate(filter, update);
  res.status(200).send(req.body);
});


app.delete("/employee/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  console.log(req.params.id);
  let doc = await Employee.deleteOne(filter);
  res.status(200).send(req.body);
});

var server = app.listen(8000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('crud app listening at http://%s:%s', host, port);  
}); 