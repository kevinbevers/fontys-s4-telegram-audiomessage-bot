import axios from "axios";
import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";


export default function Step1({nextStepFunc, updateTextFunc, text,title, updateTitleFunc}) {

    const [textState, setTextState] = useState(text || "");
    const textChange = (e) => {
      setTextState(e.target.value);
      updateTextFunc(e.target.value);
    }

    const [titleState, setTitleState] = useState(title || "");
    const titleChange = (e) => {
      setTitleState(e.target.value);
      updateTitleFunc(e.target.value);
    }

    const nextStepCheck = () => {
      if(textState?.trim().length > 0)
      {
        nextStepFunc();
      }
      else {
        // Alert here that text isn't filled in. Make it pretty with modal or something
        alert("PLEASE FILL IN SOME TEXT TO CONVERT");
      }
    };

    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner />
  
    {/* <form action="http://localhost:4001/voicefile" method="get" target="_blank"> */}
    <input type={"text"} className="inputStyling mb-4" placeholder={"Title (used as description on socials)"} value={titleState} onChange={titleChange} />
      <textarea id="text" className="h-80" name="tts" rows="4" cols="50" placeholder="Text to be converted." value={textState} onChange={textChange} />
      <div className="absolute inset-x-0 bottom-0 h-16 buttons">
          <input type="button" className="float-right" onClick={nextStepCheck} value="Next step >" />
        </div>
        {/* </form> */}
        </div>
      </>
    )
  }