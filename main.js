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
//TelegramBot
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.TelegramBotToken);

app.get('/get/:variable', async function (req, res) {

    const variable = req.params.variable;

    res.send(`Response message: ${variable}`);
  });

  app.get('/sendvoice', async function (req, res) {

    //to get the channelID https://gist.github.com/mraaroncruz/e76d19f7d61d59419002db54030ebe35
    bot.sendVoice(process.env.TelegramChannelID, "./audio/VettelAICongrats.mp3", {caption: "Sebastian Vettel congratulates Max Verstappen on his Monaco Grand Prix Victory."});

    res.send(`Voice is send in the Telegram channel`);
  });


  //App listen
  const port = process.env.PORT || 4001;
  app.listen(port, async() => {
    console.log(`Listening on port: ${port}`); 
  });