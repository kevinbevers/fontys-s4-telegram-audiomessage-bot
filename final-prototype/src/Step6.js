import { useState } from "react";
import axios from 'axios';
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import PlatformChoice from "./PlatformChoice";
import {FaShareAlt, FaStepBackward, FaStepForward} from "react-icons/fa";

export default function Step6({nextStepFunc, previousStepFunc, updatePlatformsFunc ,platforms, fileName, title}) {

  const nextStepCheck = async() => {

      await axios.post("http://localhost:4001/publishvoicetosocial", {filename: fileName, platforms: platforms, msgdesc: title}).then(async(res) => {
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
        <StepBanner stepNumber={6} stepText={"Full Send it!!!"}/>
  
  
        <div className="innerContent">
        <div className="grid grid-cols-2 gap-2">
        <div className="">
          <h3 className="text-3xl text-center">Audio sample</h3>
          <div className="flex h-80">
            <audio className="mx-auto my-auto" controls>
            <source src={`http://localhost:4001/${fileName}?cb="${new Date().getTime()}`} type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div className="">
          <h3 className="text-3xl text-center">Selected Platform{platforms?.length > 1 ? "s" : ""}</h3>
          <div className="h-80 flex"><PlatformChoice platforms={platforms}/></div>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 h-16 buttons">
        <button className="float-left redButton focus:outline-none" onClick={previousStepFunc}><span className="flex justify-center content-center buttonTopPadding"><FaStepBackward className="my-auto ml-auto mr-2"/><h3 className="my-auto mr-auto textBottomPadding">Previous Step</h3></span></button>
          <button className="float-right redButton focus:outline-none" onClick={nextStepCheck}><span className="flex justify-center content-center buttonTopPadding"><h3 className="my-auto ml-auto mr-2 textBottomPadding">Share Audio</h3><FaShareAlt className="my-auto mr-auto"/></span></button>
        </div>
        </div>
        </div>
        </div>
      </>
    )
  }