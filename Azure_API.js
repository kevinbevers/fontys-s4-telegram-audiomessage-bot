import { SpeechConfig, AudioConfig, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';
import { Readable } from 'stream';
import {readFileSync} from 'fs';


function synthesizeSpeech(textToVoice) {
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

function xmlToString(filePath) {
    const xml = readFileSync(filePath, "utf8");
    return xml;
}

function synthesizeSpeechXML(textToVoice) {
    const speechConfig = SpeechConfig.fromSubscription(process.env?.SubscriptionKey, process.env?.ServiceRegion);
    const audioConfig = AudioConfig.fromAudioFileOutput(process.env?.PathApiVoice || './audio/stock/apivoice.mp3');

    const ssml = xmlToString("ssml.xml");
    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    
    synthesizer.speakSsmlAsync(
        ssml,
        result => {
            if (result.errorDetails) {
                console.error(result.errorDetails);
            } else {
                console.log(JSON.stringify(result));
            }
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


export {synthesizeSpeech, synthesizeSpeechXML };

