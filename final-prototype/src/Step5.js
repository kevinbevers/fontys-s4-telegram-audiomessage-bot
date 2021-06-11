import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";

export default function Step5({nextStepFunc}) {
    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner stepNumber={5} stepText={"Send message"}/>
  
  
    <form action="http://localhost:4001/voicefile" method="get" target="_blank">
      <textarea id="text" name="tss" rows="4" cols="50" placeholder="Text to be converted." />
        <br/><br/><br/>
        <input type="button" className="float-right" onClick={nextStepFunc} value="Next step" />
        </form>
        </div>
      </>
    )
  }