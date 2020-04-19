const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app);
const config = require("./config/key");

const mongoose = require("mongoose");
 mongoose.connect(config.mongoURI,{useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api/users', require('./routes/users'));
app.use('/api/support', require('./routes/support'));
app.use('/api/incident', require('./routes/incident'));
app.use('/api/plan', require('./routes/plan'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));


  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  }); }

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Server Running at ${port}`) });