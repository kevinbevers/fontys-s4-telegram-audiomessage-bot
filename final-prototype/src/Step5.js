import { useState } from "react";
import axios from 'axios';
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import PlatformChoice from "./PlatformChoice";

export default function Step5({nextStepFunc, previousStepFunc, updatePlatformsFunc ,platforms, fileName}) {

  const nextStepCheck = async() => {

      await axios.post("http://localhost:4001/publishvoicetosocial", {filename: fileName, platforms: platforms}).then(async(res) => {
        if(res?.status == 200)
        {
          nextStepFunc();
        }
        else {
          //show the message
          alert("Oh no something went wrong!");
        }
      }).catch(err => {console.log(err);});
  };


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
          <input type="button" className="float-right" onClick={nextStepCheck} value="Share on Socials" />
        </div>
        </div>
        </div>
        </div>
      </>
    )
  }