import { useState } from "react";
import {FaFacebook, FaSpotify, FaInstagram, FaTwitter, FaSnapchatGhost, FaTelegram, FaWhatsapp, FaYoutube} from 'react-icons/fa';

export default function PlatformSelect({updatePlatformsFunc, platforms}) {
  const [selectedPlatforms,setSelectedPlatforms] = useState(platforms || []);
  const handlePlatformClick = (platform) => {
    if(selectedPlatforms?.includes(platform))
    {
      let filteredArray = selectedPlatforms?.filter(item => item !== platform);
      setSelectedPlatforms(filteredArray);
      updatePlatformsFunc(filteredArray);
    }
    else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
      updatePlatformsFunc([...selectedPlatforms, platform]);
    }
  };

    return (
        <>
        {/* Platforms */}
        <div className="grid grid-cols-4 gap-2 mx-auto w-1/4">
          <div className="">
            <FaInstagram   />
          </div>
          <div className="">
            <FaTwitter   />
          </div>
          <div className="">
            <FaSnapchatGhost />
           </div>
              <div className="">
            <FaFacebook />
            </div>
            <div className="">
            <FaTelegram />
            </div>
            <div className="">
            <FaWhatsapp />
            </div>
            <div className="">
            <FaSpotify />
            </div>
            <div className="">
            <FaYoutube />
            </div>
       </div></>
    )
  }