import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import VoiceSelect from "./VoiceSelect";

export default function Step2({nextStepFunc}) {
    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner stepNumber={2} stepText={"Select a voice"}/>

        <VoiceSelect />
        <br/><br/><br/>
        <input type="button" className="float-right" onClick={nextStepFunc} value="Next step" />
        </div>
      </>
    )
  }