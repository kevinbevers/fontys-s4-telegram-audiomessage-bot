const sdk = require("microsoft-cognitiveservices-speech-sdk");

function synthesizeSpeech() {
    const speechConfig = sdk.SpeechConfig.fromSubscription(SubscriptionKey, ServiceRegion);
    const audioConfig = AudioConfig.fromAudioFileOutput(PathApiVoice);

    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
        "A simple test to write to a file.",
        result => {
            synthesizer.close();
            if (result) {
                // return result as stream
                return fs.createReadStream(PathApiVoice);
            }
        },
        error => {
            console.log(error);
            synthesizer.close();
        });
}
//export{synthesizeSpeech};

