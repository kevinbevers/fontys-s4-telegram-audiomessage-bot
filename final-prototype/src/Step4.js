import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import PlatformSelect from "./PlatformSelect";

export default function Step4({nextStepFunc, previousStepFunc, updatePlatformsFunc, platforms}) {
    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner stepNumber={4} stepText={"Choose platforms to share on"}/>
  
  
        <div className="innerContent">
          <PlatformSelect updatePlatformsFunc={updatePlatformsFunc} platforms={platforms}/>
        <div className="absolute inset-x-0 bottom-0 h-16 buttons">
          <input type="button" className="float-left" onClick={previousStepFunc} value="< Previous step" />
          <input type="button" className="float-right" onClick={nextStepFunc} value="Next step >" />
        </div>
        </div>
        </div>
      </>
    )
  }