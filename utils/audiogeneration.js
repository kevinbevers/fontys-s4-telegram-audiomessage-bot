//ffmpeg for image, audio and movie manipulation.
const FfmpegCommand = require('fluent-ffmpeg');
//file system
const fs = require('fs');


  const generateCoolBoardRadioEffect = async(inputFilePath) => {
    const command = new FfmpegCommand();
    const command2 = new FfmpegCommand();
    //create audio file with voice and engine sound under.
    await command
    .addInput(inputFilePath)
    .addInput('./audio/utility/RB16BengineOnboard.mp3').seekInput(40)
    //'amix=inputs=2:duration=first:dropout_transition=0'
    .complexFilter([{
      filter: 'volume',
      options: ['1.0'],
      inputs: "0:a",
      outputs: "[s1]"
    },
    {
      filter: 'volume',
      options: ['0.15'],
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
      .mergeToFile('./audio/speechWithCoolBoardRadioEffect.mp3', './audio/temp');

    })
    .run();
  };

// exports the variables and functions above so that other modules can use them
module.exports.generateCoolBoardRadioEffect = generateCoolBoardRadioEffect;