const environment = require('./environments/environment.json')
const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user.route');

const port= 4201;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect(`mongodb+srv://${(environment.env.MONGO_TEST_USERNAME)?environment.env.MONGO_TEST_USERNAME : 'ani10'}:${(environment.env.MONGO_TEST_PASSWORD)?environment.env.MONGO_TEST_PASSWORD :'gy7dBPYyijRvlcrE'}@cluster0.qefhk.mongodb.net/task-manager?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use('/users', user, (res, rej) => {
  res.send("Success");
});

app.use('/', (req, res) => {
  res.send("Help will come to those who seek")
});

app.listen(port, () => {
  console.log(`live at port: ${port}` );
});
//---------------------------------
