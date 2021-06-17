import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import PlatformChoice from "./PlatformChoice";

export default function Step5({nextStepFunc, previousStepFunc, updatePlatformsFunc ,platforms}) {
    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner stepNumber={5} stepText={"Full Send it!!!"}/>
  
  
        <div className="innerContent">
        <div className="grid grid-cols-2 gap-2">
        <div className="">
          <h3 className="text-3xl text-center">Audio sample</h3>
          <div className="flex h-80">
            <audio className="mx-auto my-auto" controls></audio>
          </div>
        </div>
        <div className="">
          <h3 className="text-3xl text-center">Selected Platform{platforms?.length > 1 ? "s" : ""}</h3>
          <div className="h-80 flex"><PlatformChoice platforms={platforms}/></div>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 h-16 buttons">
          <input type="button" className="float-left" onClick={previousStepFunc} value="< Previous step" />
          <input type="button" className="float-right" onClick={nextStepFunc} value="Next step >" />
        </div>
        </div>
        </div>
        </div>
      </>
    )
  }