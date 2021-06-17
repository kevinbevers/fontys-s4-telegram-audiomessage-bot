import axios from "axios";
import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import VoiceSelect from "./VoiceSelect";

export default function Step2({nextStepFunc, previousStepFunc, updateVoiceFunc, voice, text, updateFileNameFunc}) {

  const nextStepCheck = async() => {
    if(voice != "")
    {
      await axios.get("http://localhost:4001/createvoicefile", { params: {tts: text?.trim().toString(), voice: voice?.toString() } }).then(async(res) => {
        if(res?.status == 200)
        {
          updateFileNameFunc(res?.data);
          nextStepFunc();
        }
        else {
          //show the message
          alert(res?.data);
        }
      }).catch(err => {console.log(err);});
    }
    else {
      // Alert here that text isn't filled in. Make it pretty with modal or something
      alert("PLEASE SELECT A VOICE");
    }
  };


    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner stepNumber={2} stepText={"Select a voice"}/>
        <div className="innerContent">
        <VoiceSelect updateVoiceFunc={updateVoiceFunc} voice={voice}/>
        <div className="absolute inset-x-0 bottom-0 h-16 buttons">
          <input type="button" className="float-left" onClick={previousStepFunc} value="< Previous step" />
          <input type="button" className="float-right" onClick={nextStepCheck} value="Next step >" />
        </div>
        </div>
        </div>
      </>
    )
  }