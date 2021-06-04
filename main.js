import { synthesizeSpeech, synthesizeSpeechXML } from './Azure_API.js'
//express for api
import express from 'express'
const app = express();
app.use(express.json());
//env variables
import dotenv from 'dotenv'
dotenv.config(); //add post middleware
//schedule job
import schedule from 'node-schedule'
//make api calls with axios
import axios from 'axios'
//TelegramBot
import TeleBot from 'telebot'
import audiogeneration from './utils/audiogeneration.js';

app.get('/get/:variable', async function (req, res) {

    const variable = req.params.variable;

    res.send(`Response message: ${variable}`);
  });

  app.get('/sendvoice', async function (req, res) {

    const bot = new TeleBot(process.env?.TelegramBotToken || "");
    //to get the channelID https://gist.github.com/mraaroncruz/e76d19f7d61d59419002db54030ebe35
    bot.sendVoice(process.env?.TelegramChannelID || "", "./audio/VettelAICongrats.mp3", {caption: "Sebastian Vettel congratulates Max Verstappen on his Monaco Grand Prix Victory."});

    res.send(`Voice is send in the Telegram channel`);
  });

  app.get('/mixaudio', async function (req, res) {

    await audiogeneration.generateCoolBoardRadioEffectWithDistortion('./audio/stock/apivoiceXML.mp3');

    res.send(`Audio mixed with ffmpeg`);
  });

  app.get('/createandsendradiomessage/:filename', async function (req, res) {

    const filename = req.params.filename;
    const bot = new TeleBot(process.env?.TelegramBotToken || "");

    await audiogeneration.generateCoolBoardRadioEffect(`./audio/stock/${filename}`).then(() => {
      bot.sendVoice(process.env?.TelegramChannelID || "", "./audio/speechWithCoolBoardRadioEffect.mp3", {caption: "This file is fully generated by code and didn't have any human interaction."});
      console.log("finished sending message");
    }).catch((err) => {console.log(err)});

    res.send(`radio message created and send via telegram.`);
  });

  app.get('/voicefile', async function (req, res) {
    // get text from query
    const textFromQuery = req.query.tss.toString();
    console.log(textFromQuery);
    // const text=`Hey Valterri, it is James.Fuck you`;

    await synthesizeSpeechXML(textFromQuery);
    //await synthesizeSpeech("This is for all the kids out there that dream of the impossible!");
    
    res.send(`Voice is made and stored in a file`);
  });

  function searchURL() {
    window.location = "http://localhost:4001/websitedata/" + input.value;
  }
  app.get('/websitedata', async function (req, res) {
      var input = document.getElementById("fname");

    
    await synthesizeSpeechXML(text);
    //await synthesizeSpeech("This is for all the kids out there that dream of the impossible!");
    
    res.send(`Voice is made and stored in a file`);
  });


  //App listen
  const port = process.env?.PORT || 4001;
  app.listen(port, async() => {
    console.log(`Listening on port: ${port}`); 
  });

