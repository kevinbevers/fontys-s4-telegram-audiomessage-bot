import { useState } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import {FaStepBackward, FaStepForward} from "react-icons/fa";

export default function Step3({nextStepFunc, previousStepFunc, voice, text, fileName}) {
    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner stepNumber={3} stepText={"Preview audio"}/>
  
  
        <div className="innerContent">
        <div className="grid grid-cols-3 gap-2">
        <div className="">
          <h3 className="text-3xl text-center">Text that is converted</h3>
          <div className="overflow-y-scroll h-80 m-2 graybg">
          <p>{text}</p>
          </div>
        </div>
        <div className="">
          <h3 className="text-3xl text-center">Selected voice</h3>
          <div className={`rounded-full border-red-custom border-4 w-72 mx-auto mt-5`}><img src={`/drivers/${voice}.png`} className="rounded-full" draggable="false"></img></div>
          <h4 className="text-2xl text-center mt-3">{voice}</h4>
          </div>
        <div className="">
          <h3 className="text-3xl text-center">Generated audo file</h3>
          <div className="flex h-80">
          <audio className="mx-auto my-auto" controls>
          <source src={`http://localhost:4001/${fileName}?cb="${new Date().getTime()}`} type="audio/mpeg" />
          </audio>
          </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 buttons">
        <button className="float-left redButton focus:outline-none" onClick={previousStepFunc}><span className="flex justify-center content-center buttonTopPadding"><FaStepBackward className="my-auto ml-auto mr-2"/><h3 className="my-auto mr-auto textBottomPadding">Previous Step</h3></span></button>
          <button className="float-right redButton focus:outline-none" onClick={nextStepFunc}><span className="flex justify-center content-center buttonTopPadding"><h3 className="my-auto ml-auto mr-2 textBottomPadding">Next Step</h3><FaStepForward className="my-auto mr-auto"/></span></button>
        </div>
        </div>
        </div>
      </>
    )
  }