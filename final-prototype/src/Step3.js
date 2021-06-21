import { useState, useEffect, useRef } from "react";
import PageTitle from "./PageTitle";
import StepBanner from "./StepBanner";
import {FaStepBackward, FaStepForward, FaVolumeDown, FaVolumeUp} from "react-icons/fa";
import axios from 'axios';

export default function Step3({nextStepFunc, previousStepFunc, updateBackgroundVolume, voice, text, updateFileNameFunc,backgroundVolume, backgroundTiming, updateBackgroundTiming, updateNotiSound, updateDistortion, notiSound, distortion, backgroundType, updateBackgroundType}) {
  const [volume,setVolume] = useState(backgroundVolume);
  const [timing, setTiming] = useState(backgroundTiming);
  const [noti, setNoti] = useState(notiSound);
  const [dist, setDist] = useState(distortion);
  const [background, setBackground] = useState(backgroundType);


  const nextStepCheck = async() => {
    await axios.get("http://localhost:4001/createvoicefile", { params: {tts: text?.trim().toString(), voice: voice?.toString(), notisound: noti, distortion: dist, backgroundvol: volume, backgroundtiming: timing, background: background } }).then(async(res) => {
      if(res?.status == 200)
      {
        updateFileNameFunc(res?.data);
        nextStepFunc();
      }
      else {
        //show the message
        alert(res?.data);
      }
    }).catch(err => {console.log(err);});
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    updateBackgroundVolume(e.target.value);
  };

  const handleBackgroundTimingChange = (e) => {
    setTiming(e.target.value);
    updateBackgroundTiming(e.target.value);
  };

  const handleNotiChange = (e) => {
    console.log(e.target.checked);
    setNoti(e.target.checked);
    updateNotiSound(e.target.checked);
  };

  const handleDistChange = (e) => {
    setDist(e.target.checked);
    updateDistortion(e.target.checked);
  };

  const handleSelectChange = (e) => {
    setBackground(e.target.value);
    updateBackgroundType(e.target.value);
  };


    return (
      <>
        <div className="content">
        <PageTitle />
        <StepBanner stepNumber={3} stepText={"Tweak sound settings"}/>
  
  
        <div className="innerContent">
        <div className="grid grid-cols-3 gap-2">
        <div className="">
          <h3 className="text-3xl text-center">Background noise</h3>
          <div className="h-8 mt-8">
              <select className="flex w-60 mx-auto cursor-pointer" value={background} onChange={handleSelectChange} > 
                <option value="RB16BengineOnboard.mp3">Honda Engine Turbo-Hybrid</option>
                <option value="W12engineOnboard.mp3">Merc Engine Turbo-Hybrid</option>
                <option value="honda_f1.mp3">Honda Engine V10</option>
              </select>
            </div>
          <div className="flex h-64">
            <div className="flex h-24 mx-auto cursor-pointer w-72">
            <FaVolumeDown className="my-auto mr-1"/><input className="cursor-pointer" type="range" min="0" max="100" step="1" defaultValue={volume} onChange={handleVolumeChange} /><FaVolumeUp className="ml-1 my-auto" />
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-3xl text-center">Background timing</h3>
          <div className="flex-col h-80">
            <div className="flex">
              <div className="mx-auto" onChange={handleBackgroundTimingChange}>
                {/* Custom radio buttons */}
            <div className="mt-3"><div className="radio-item"><input type="radio" defaultChecked={timing == "whole" ? true : false} name="backgroundtiming" value="whole" id={"whole"} /><label htmlFor={"whole"}> Whole duration of message</label></div></div>
            <div className="mt-3"><div className="radio-item"><input type="radio" defaultChecked={timing == "beginning" ? true : false} name="backgroundtiming" value="beginning" id={"beginning"}/><label htmlFor={"beginning"}> First 5 seconds</label></div></div>
            <div className="mt-3"><div className="radio-item"><input type="radio" defaultChecked={timing == "ending" ? true : false} name="backgroundtiming" value="ending" id={"ending"} /><label htmlFor={"ending"}> Last 5 seconds</label></div></div>
            </div>
            </div>
          </div>
          </div>
        <div className="">
          <h3 className="text-3xl text-center">Extra options</h3>
            <div className="w-80">
              <div className="flex mt-5 justify-end">
                <h4 className="mr-4 my-auto switchLabel switchPaddingText">F1 Radio Notification sound</h4>
                <label className="switch my-auto">
                  <input type="checkbox" checked={noti} onChange={handleNotiChange}/>
                  <span className="slider"></span>
                </label>
              </div>

              <div className="flex mt-5 justify-end">
                <h4 className="mr-4 my-auto switchLabel switchPaddingText">Distortion effect</h4>
                <label className="switch my-auto">
                  <input type="checkbox" checked={dist} onChange={handleDistChange}/>
                  <span className="slider"></span>
                </label>
              </div>

            </div>
        </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 buttons">
        <button className="float-left redButton focus:outline-none" onClick={previousStepFunc}><span className="flex justify-center content-center buttonTopPadding"><FaStepBackward className="my-auto ml-auto mr-2"/><h3 className="my-auto mr-auto textBottomPadding">Previous Step</h3></span></button>
          <button className="float-right redButton focus:outline-none" onClick={nextStepCheck}><span className="flex justify-center content-center buttonTopPadding"><h3 className="my-auto ml-auto mr-2 textBottomPadding">Next Step</h3><FaStepForward className="my-auto mr-auto"/></span></button>
        </div>
        </div>
        </div>
      </>
    )
  }