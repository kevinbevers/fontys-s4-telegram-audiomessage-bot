import axios from "axios";
import { useState } from "react";

export default function Step1({nextStepFunc}) {

    const [textState, setTextState] = useState("");
    const textChange = (e) => {
      setTextState(e.target.value);
    }

    const sendRequestToApiToGenerateVoiceFile = async() => {
      if(textState?.trim().length > 0)
      {
        console.log(textState);
        await axios.get("http://localhost:4001/createvoicefileandsend", { params: {tts: textState?.toString() } }).then(async(res) => {
          if(res?.status == 200)
          {
            nextStepFunc();
          }
          else {
            //show the message
            alert(res?.data);
          }
        }).catch(err => {console.log(err);});
      }
      else {
        alert("HEHE UGLY POP UP, PLEASE FILL IN SOME TEXT");
      }
    }

    return (
      <>
        <div className="content">
        <h1>Text to speech</h1>
        <div className="redbg">
          <h2>1 Text to convert</h2>
        </div>
  
  
    {/* <form action="http://localhost:4001/voicefile" method="get" target="_blank"> */}
      <textarea id="text" name="tts" rows="4" cols="50" placeholder="Text to be converted." value={textState} onChange={textChange} />
        <br/><br/><br/>
          <input type="button" onClick={sendRequestToApiToGenerateVoiceFile} value="Select a voice >" />
        {/* </form> */}
        </div>
      </>
    )
  }