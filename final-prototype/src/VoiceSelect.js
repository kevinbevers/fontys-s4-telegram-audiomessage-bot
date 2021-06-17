import { useState } from "react";

export default function VoiceSelect({updateVoiceFunc, voice}) {
    const [selectedVoice,setSelectedVoice] = useState(voice || "");
    const listOfDrivers = ["Verstappen","Hamilton","Pérez","Norris","Leclerc","Bottas","Sainz","Gasly","Vettel","Ricciardo","Alonso","Ocon","Stroll","Tsunoda","Räikkönen","Giovinazzi","Latifi","Russell","Schumacher","Mazepin","default_male","default_female"];

    return (
        <>
            {/* Drivers */}
            <div className="grid grid-cols-10 gap-4 ml-4">
            {listOfDrivers.map((d, index) => (
                    <div key={d} onClick={(e) => { setSelectedVoice(d); updateVoiceFunc(d); }} className={`VoiceCircle rounded-full border-red-custom ${selectedVoice != "" ? selectedVoice == d ? "border-8" : "border-4 opacity-50" : "border-4"}`}><img src={`/drivers/${d}.png`} className="rounded-full" draggable="false"></img></div>
                  ))}
            </div></>
    )
  }