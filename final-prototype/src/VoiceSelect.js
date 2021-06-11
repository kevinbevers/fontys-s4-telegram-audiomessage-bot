import { useState } from "react";

export default function VoiceSelect() {
    const [selectedVoice,setSelectedVoice] = useState("");
    const listOfDrivers = ["Verstappen","Hamilton","Pérez","Norris","Leclerc","Bottas","Sainz","Gasly","Vettel","Ricciardo","Alonso","Ocon","Stroll","Tsunoda","Räikkönen","Giovinazzi","Latifi","Russell","Schumacher","Mazepin","default_male"];

    return (
        <>
            {/* Drivers */}
            <div className="grid grid-cols-10 gap-4 ml-4">
            {listOfDrivers.map((d, index) => (
                    <div key={d} onClick={(e) => { setSelectedVoice(d); console.log(e); }} className={`VoiceCircle rounded-full border-red-500 ${selectedVoice == d ? "border-8" : "border-4"}`}><img src={`/drivers/${d}.png`} className="rounded-full" draggable="false"></img></div>
                  ))}
            </div></>
    )
  }