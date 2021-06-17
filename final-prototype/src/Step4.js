import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import PlatformSelect from "./PlatformSelect";

export default function Step4({nextStepFunc, previousStepFunc, updatePlatformsFunc, platforms}) {

  const nextStepCheck = () => {
    if(platforms?.length > 0)
    {
      nextStepFunc();
    }
    else {
      // Alert here that text isn't filled in. Make it pretty with modal or something
      alert("PLEASE SELECT A PLATFORM TO SHARE ON.");
    }
  };

    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner stepNumber={4} stepText={"Choose platforms to share on"}/>
  
  
        <div className="innerContent">
          <PlatformSelect updatePlatformsFunc={updatePlatformsFunc} platforms={platforms}/>
        <div className="absolute inset-x-0 bottom-0 h-16 buttons">
          <input type="button" className="float-left" onClick={previousStepFunc} value="< Previous step" />
          <input type="button" className="float-right" onClick={nextStepCheck} value="Next step >" />
        </div>
        </div>
        </div>
      </>
    )
  }