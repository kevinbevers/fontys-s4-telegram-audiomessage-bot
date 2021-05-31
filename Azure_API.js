import { SpeechConfig, AudioConfig, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk'
import { Readable } from 'stream'


export  function synthesizeSpeech(textToVoice) {
    try {
    const speechConfig = SpeechConfig.fromSubscription(process.env?.SubscriptionKey, process.env?.ServiceRegion);
    const audioConfig = AudioConfig.fromAudioFileOutput(process.env?.PathApiVoice || './audio/stock/apivoice.mp3');

    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
        textToVoice,
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


