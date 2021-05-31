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
const bot = new TeleBot(process.env?.TelegramBotToken);
//ffmpeg for image, audio and movie manipulation.
const FfmpegCommand = require('fluent-ffmpeg');
//file system
const fs = require('fs');

app.get('/get/:variable', async function (req, res) {

    const variable = req.params.variable;

    res.send(`Response message: ${variable}`);
  });

  app.get('/sendvoice', async function (req, res) {

    //to get the channelID https://gist.github.com/mraaroncruz/e76d19f7d61d59419002db54030ebe35
    bot.sendVoice(process.env?.TelegramChannelID, "./audio/VettelAICongrats.mp3", {caption: "Sebastian Vettel congratulates Max Verstappen on his Monaco Grand Prix Victory."});

    res.send(`Voice is send in the Telegram channel`);
  });

  app.get('/mixaudio', async function (req, res) {

    await generateCoolBoardRadioEffect('./audio/stock/HelloAndWelcome.flac');

    res.send(`Audio mixed with ffmpeg`);
  });


  //App listen
  const port = process.env?.PORT || 4001;
  app.listen(port, async() => {
    console.log(`Listening on port: ${port}`); 
  });

  const generateCoolBoardRadioEffect = async(inputFilePath) => {
    const command = new FfmpegCommand();
    const command2 = new FfmpegCommand();
    //create audio file with voice and engine sound under.
    await command
    .addInput(inputFilePath)
    .addInput('./audio/utility/f1enginesound.mp3').seekInput(35)
    //'amix=inputs=2:duration=first:dropout_transition=0'
    .complexFilter([{
      filter: 'volume',
      options: ['1.0'],
      inputs: "0:a",
      outputs: "[s1]"
    },
    {
      filter: 'volume',
      options: ['0.3'],
      inputs: "1:a",
      outputs: "[s2]"
    },
    {
      filter: 'amix',
      inputs: ["[s1]","[s2]"],
      options: ['duration=first','dropout_transition=0']
    }]).output('./audio/temp/overlayed.mp3').on('error', function(err) {
      console.log(err);
    })
    .on('end', function() {
      console.log('Amixed audio files together.');

      //put noti sound in front of previous generated file.
      command2.addInput('./audio/utility/f1radionotification.mp3').addInput('./audio/temp/overlayed.mp3').on('error', function(err) {
        console.log('An error occurred: ' + err.message);
      })
      .on('end', function() {
        console.log('Merged audio files successfully!');

        fs.unlink('./audio/temp/overlayed.mp3', (err) => {
          if (err) {
            console.error(err)
            return
          } 
          //file removed
        })
      })
      .mergeToFile('./audio/result.mp3', './audio/temp');

    })
    .run();
  };