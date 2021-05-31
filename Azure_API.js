import { SpeechConfig, AudioConfig, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk'
import { Readable } from 'stream'


export  function synthesizeSpeech(textToVoice) {
    try {
    const speechConfig = SpeechConfig.fromSubscription(process.env?.SubscriptionKey, process.env?.ServiceRegion);
    const audioConfig = AudioConfig.fromAudioFileOutput(process.env?.PathApiVoice);

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

// function xmlToString(filePath) {
//     const xml = readFileSync(filePath, "utf8");
//     return xml;
// }
// export  function synthesizeSpeech(textToVoice) {
//     const speechConfig = sdk.SpeechConfig.fromSubscription("YourSubscriptionKey", "YourServiceRegion");
//     const synthesizer = new sdk.SpeechSynthesizer(speechConfig, undefined);

//     const ssml = xmlToString("ssml.xml");
//     synthesizer.speakSsmlAsync(
//         ssml,
//         result => {
//             if (result.errorDetails) {
//                 console.error(result.errorDetails);
//             } else {
//                 console.log(JSON.stringify(result));
//             }

//             synthesizer.close();
//         },
//         error => {
//             console.log(error);
//             synthesizer.close();
//         });
// }




