import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import PlatformSelect from "./PlatformSelect";
import {FaStepBackward, FaStepForward} from "react-icons/fa";

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
        <button className="float-left redButton focus:outline-none" onClick={previousStepFunc}><span className="flex justify-center content-center buttonTopPadding"><FaStepBackward className="my-auto ml-auto mr-2"/><h3 className="my-auto mr-auto textBottomPadding">Previous Step</h3></span></button>
          <button className="float-right redButton focus:outline-none" onClick={nextStepCheck}><span className="flex justify-center content-center buttonTopPadding"><h3 className="my-auto ml-auto mr-2 textBottomPadding">Next Step</h3><FaStepForward className="my-auto mr-auto"/></span></button>
        </div>
        </div>
        </div>
      </>
    )
  }