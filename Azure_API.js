const sdk = require("microsoft-cognitiveservices-speech-sdk");
require('dotenv').config()

function synthesizeSpeech() {
    try {
    const speechConfig = sdk.SpeechConfig.fromSubscription(process.env?.SubscriptionKey, process.env?.ServiceRegion);
    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(process.env?.PathApiVoice);

    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
        "A simple test to write to a file.",
        result => {
            synthesizer.close();
            if (result) {
                // return result as stream
                return fs.createReadStream(process.env?.PathApiVoice);
            }
        },
        error => {
            console.log(error);
            synthesizer.close();
        });
    }
    catch {};
}
module.exports = synthesizeSpeech();


