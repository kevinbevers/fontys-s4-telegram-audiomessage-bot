import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";

export default function Step4({nextStepFunc, previousStepFunc}) {
    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner stepNumber={4} stepText={"Choose platforms to share on"}/>
  
  
        <div className="innerContent">
       
        <div className="absolute inset-x-0 bottom-0 h-16 buttons">
          <input type="button" className="float-left" onClick={previousStepFunc} value="< Previous step" />
          <input type="button" className="float-right" onClick={nextStepFunc} value="Next step >" />
        </div>
        </div>
        </div>
      </>
    )
  }