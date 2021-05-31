//var apiFunction = require();
import { synthesizeSpeech } from './Azure_API.js'

//express for api
import express from 'express'
//const express = require('express');
const app = express();
app.use(express.json());
//env variables
import dotenv from 'dotenv'
//const dotenv = require('dotenv');
dotenv.config(); //add post middleware
//schedule job
import schedule from 'node-schedule'
//const schedule = require('node-schedule');
//make api calls with axios
import axios from 'axios'
//const axios = require('axios');
//TelegramBot
import TeleBot from 'telebot'
//const TeleBot = require('telebot');
/import {generateCoolBoardRadioEffect} from './utils/audiogeneration.js'
//const audiogeneration = require('./utils/audiogeneration');

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

    await generateCoolBoardRadioEffect('./audio/stock/CroftyDefaultText.flac');

    res.send(`Audio mixed with ffmpeg`);
  });

  app.get('/voicefile', async function (req, res) {
    
    synthesizeSpeech("Getting the response as an in-memory stream. this is a test");
    
    res.send(`Voice is made and stored in a file`);
  });


  //App listen
  const port = process.env?.PORT || 4001;
  app.listen(port, async() => {
    console.log(`Listening on port: ${port}`); 
  });

