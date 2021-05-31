//ffmpeg for image, audio and movie manipulation.
import FfmpegCommand from 'fluent-ffmpeg';
//file system
import fs from 'fs';


  const generateCoolBoardRadioEffect = (inputFilePath) => {
   return new Promise(function(resolve, reject) {
    const command = new FfmpegCommand();
    const command2 = new FfmpegCommand();
    //create audio file with voice and engine sound under.
    command
    .addInput(inputFilePath)
    .addInput('./audio/utility/RB16BengineOnboard.mp3').seekInput(40)
    //'amix=inputs=2:duration=first:dropout_transition=0'
    .complexFilter([{
      filter: 'volume',
      options: ['1.0'],
      inputs: "0:0",
      outputs: "[s1]"
    },
    {
      filter: 'volume',
      options: ['0.1'],
      inputs: "1:0",
      outputs: "[s2]"
    },
    {
      filter: 'amix',
      inputs: ["[s1]","[s2]"],
      options: ['duration=first','dropout_transition=0']
    }]).save('./audio/temp/overlayed.mp3').on('error', function(err) {
      reject(new Error(err?.message || "Whoops!"));
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
            reject(new Error(err?.message || "Whoops!"));
          } 
          //file removed
          resolve();
        })
      })
      .mergeToFile('./audio/speechWithCoolBoardRadioEffect.mp3', './audio/temp');
    });
    });
  };

  const generateCoolBoardRadioEffectWithDistortion = (inputFilePath) => {
    return new Promise(function(resolve, reject) {
     const command = new FfmpegCommand();
     const command2 = new FfmpegCommand();
     const command3 = new FfmpegCommand();
     //create audio file with voice and engine sound under.
     command
     .addInput(inputFilePath)
    //  .addInput('./audio/utility/distortion.mp3').seekInput(25)
     .complexFilter([
       {
       filter: 'highpass',
       options: ['f=1000'],
       inputs: "0:0",
       outputs: "s"
     },
     {
      filter: 'lowpass',
      options: ['f=1000'],
      inputs: "s",
    },
    //  {
    //    filter: 'volume',
    //    options: ['0.15'],
    //    inputs: "1:0",
    //    outputs: "[s2]"
    //  },
    //  {
    //    filter: 'amix',
    //    inputs: ["[s1]","[s2]"],
    //    options: ['duration=first','dropout_transition=0']
    //  }
    ]).save('./audio/temp/distort.mp3').on('error', function(err) {
       reject(new Error(err?.message || "Whoops!"));
     })
     .on('end', function() {
        command2
        .addInput('./audio/temp/distort.mp3')
        .addInput('./audio/utility/RB16BengineOnboard.mp3').seekInput(40)
        //'amix=inputs=2:duration=first:dropout_transition=0'
        .complexFilter([{
          filter: 'volume',
          options: ['6.0'],
          inputs: "0:0",
          outputs: "[s1]"
        },
        {
          filter: 'volume',
          options: ['0.15'],
          inputs: "1:0",
          outputs: "[s2]"
        },
        {
          filter: 'amix',
          inputs: ["[s1]","[s2]"],
          options: ['duration=first','dropout_transition=0']
        }]).save('./audio/temp/overlayed.mp3').on('error', function(err) {
          reject(new Error(err?.message || "Whoops!"));
        })
        .on('end', function() {
          console.log('Amixed audio files together.');
    
          //put noti sound in front of previous generated file.
          command3.addInput('./audio/utility/f1radionotification.mp3').addInput('./audio/temp/overlayed.mp3').on('error', function(err) {
            console.log('An error occurred: ' + err.message);
          })
          .on('end', function() {
            console.log('Merged audio files successfully!');
    
            fs.unlink('./audio/temp/overlayed.mp3', (err) => {
              if (err) {
                reject(new Error(err?.message || "Whoops!"));
              } 
              fs.unlink('./audio/temp/distort.mp3', (err) => {
                if (err) {
                  reject(new Error(err?.message || "Whoops!"));
                }      
                //files removed
                resolve();
              });
            });

          })
          .mergeToFile('./audio/speechWithCoolBoardRadioEffectDistorted.mp3', './audio/temp');
        });
        });
    });
   };

// exports the variables and functions above so that other modules can use them
export default { generateCoolBoardRadioEffect, generateCoolBoardRadioEffectWithDistortion };