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
        <div className="grid grid-cols-4 gap-2 mx-auto w-3/4">
          <div className="">
            <FaInstagram onClick={() => handlePlatformClick("Instagram")} className={`mx-auto mt-3 text-9xl PlatformLogo ${selectedPlatforms.includes("Instagram") ? "text-red-custom" : ""}`}  />
              <h3 className="text-2xl text-center">Instagram</h3>
            </div>
            <div className="">
            <FaTwitter onClick={() => handlePlatformClick("Twitter")} className={`mx-auto mt-3 text-9xl PlatformLogo ${selectedPlatforms.includes("Twitter") ? "text-red-custom" : ""}`}  />
              <h3 className="text-2xl text-center">Twitter</h3>
            </div>
            <div className="">
            <FaSnapchatGhost onClick={() => handlePlatformClick("Snapchat")} className={`mx-auto mt-3 text-9xl PlatformLogo ${selectedPlatforms.includes("Snapchat") ? "text-red-custom" : ""}`}  />
              <h3 className="text-2xl text-center">Snapchat</h3>
            </div>
              <div className="">
            <FaFacebook onClick={() => handlePlatformClick("Facebook")} className={`mx-auto mt-3 text-9xl PlatformLogo ${selectedPlatforms.includes("Facebook") ? "text-red-custom" : ""}`}  />
              <h3 className="text-2xl text-center">Facebook</h3>
            </div>
            <div className="">
            <FaTelegram onClick={() => handlePlatformClick("Telegram")} className={`mx-auto mt-3 text-9xl PlatformLogo ${selectedPlatforms.includes("Telegram") ? "text-red-custom" : ""}`}  />
              <h3 className="text-2xl text-center">Telegram</h3>
            </div>
            <div className="">
            <FaWhatsapp onClick={() => handlePlatformClick("WhatsApp")} className={`mx-auto mt-3 text-9xl PlatformLogo ${selectedPlatforms.includes("WhatsApp") ? "text-red-custom" : ""}`}  />
              <h3 className="text-2xl text-center">WhatsApp</h3>
            </div>
            <div className="">
            <FaSpotify onClick={() => handlePlatformClick("Spotify")} className={`mx-auto mt-3 text-9xl PlatformLogo ${selectedPlatforms.includes("Spotify") ? "text-red-custom" : ""}`}  />
              <h3 className="text-2xl text-center">Spotify</h3>
            </div>
            <div className="">
            <FaYoutube onClick={() => handlePlatformClick("Youtube")} className={`mx-auto mt-3 text-9xl PlatformLogo ${selectedPlatforms.includes("Youtube") ? "text-red-custom" : ""}`}  />
              <h3 className="text-2xl text-center">Youtube</h3>
            </div>
       </div></>
    )
  }