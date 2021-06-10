import { SpeechConfig, AudioConfig, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';
import { Readable } from 'stream';
import {readFileSync} from 'fs';


async function synthesizeSpeech(textToVoice) {
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

async function synthesizeSpeechXML(textToVoice) {
    return new Promise(function(resolve, reject) {
    const speechConfig = SpeechConfig.fromSubscription(process.env?.SubscriptionKey, process.env?.ServiceRegion);
    const audioConfig = AudioConfig.fromAudioFileOutput(process.env?.PathApiVoiceXml || './audio/stock/apivoiceXML.mp3');

    const ssml='<speak version="1.0" xmlns="https://www.w3.org/2001/10/synthesis" xml:lang="en-US">    <voice name="en-GB-RyanNeural">    '+textToVoice+'    </voice>  </speak>';
    //const ssml = xmlToString("ssml.xml");
    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    
    synthesizer.speakSsmlAsync(
        ssml,
        result => {
            console.log(ssml);
            if (result.errorDetails) {
                console.error(result.errorDetails);
            } else {
                console.log(JSON.stringify(result));
            }
            const { audioData } = result;

            synthesizer.close();
            resolve();
        },
        error => {
            console.log(error);
            synthesizer.close();
            reject();
        });
    });
        
}


export {synthesizeSpeech, synthesizeSpeechXML };

