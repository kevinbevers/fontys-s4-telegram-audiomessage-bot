//express for api
const express = require('express');
const app = express();
app.use(express.json());
//env variables
const dotenv = require('dotenv');
dotenv.config(); //add post middleware

//schedule job
const schedule = require('node-schedule');
//make api calls with axios
const axios = require('axios');

app.get('/get/:variable', async function (req, res) {

    const variable = req.params.variable;

    res.send(`Response message`);
  });


  //App listen
  const port = process.env.PORT || 4001;
  app.listen(port, async() => {
    console.log(`Listening on port: ${port}`); 
  });