import axios from "axios";
import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import VoiceSelect from "./VoiceSelect";
import {FaStepBackward, FaStepForward} from "react-icons/fa";

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
        <button className="float-left redButton focus:outline-none" onClick={previousStepFunc}><span className="flex justify-center content-center buttonTopPadding"><FaStepBackward className="my-auto ml-auto mr-2"/><h3 className="my-auto mr-auto textBottomPadding">Previous Step</h3></span></button>
          <button className="float-right redButton focus:outline-none" onClick={nextStepCheck}><span className="flex justify-center content-center buttonTopPadding"><h3 className="my-auto ml-auto mr-2 textBottomPadding">Next Step</h3><FaStepForward className="my-auto mr-auto"/></span></button>
        </div>
        </div>
        </div>
      </>
    )
  }