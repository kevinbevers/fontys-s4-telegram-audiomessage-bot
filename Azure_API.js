const sdk = require("microsoft-cognitiveservices-speech-sdk");
require('dotenv').config()

const { Readable } = require('stream');


function synthesizeSpeech() {
    try {
    const speechConfig = sdk.SpeechConfig.fromSubscription(process.env?.SubscriptionKey, process.env?.ServiceRegion);
    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(process.env?.PathApiVoice);

    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
        "Getting the response as an in-memory stream.",
        result => {
            const { audioData } = result;

            synthesizer.close();
            const stream = Readable.from(audioData.toString());
            
            return stream;
        },
        error => {
            console.log(error);
            synthesizer.close();
        });
    }
    catch {};
}
module.exports = synthesizeSpeech();


