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
        <div className="grid grid-cols-2  gap-2">
        <div className="bg-pink-500">
          <h3 className="text-3xl text-center">Audio sample</h3>
          <div className="flex h-80">
            <audio className="mx-auto my-auto" controls></audio>
          </div>
        </div>
        <div className=" bg-pink-500">
          <h3 className="text-3xl text-center">Selected Platform</h3>
          <PlatformSelect updatePlatformsFunc={updatePlatformsFunc}/>
          <h4 className="text-2xl text-center">{platforms}</h4>
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