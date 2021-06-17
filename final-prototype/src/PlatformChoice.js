import { useState } from "react";
import {FaFacebook, FaSpotify, FaInstagram, FaTwitter, FaSnapchatGhost, FaTelegram, FaWhatsapp, FaYoutube} from 'react-icons/fa';

export default function PlatformSelect({platforms}) {

    return (
      <>
      {/* Platforms */}
      <div className={`grid grid-cols-${platforms?.length <= 4 ? platforms?.length : platforms?.length < 7 ? 3 : 4} gap-2 mx-auto my-auto w-3/4`}>

        {platforms?.includes("Instagram") ? <div className="">
          <FaInstagram className={`mx-auto mt-3 text-9xl`}  />
          </div> : <> </>}

          {platforms?.includes("Twitter") ? <div className="">
          <FaTwitter className={`mx-auto mt-3 text-9xl`}  />
          </div> : <> </>}

          {platforms?.includes("Snapchat") ? <div className="">
          <FaSnapchatGhost className={`mx-auto mt-3 text-9xl`}  />
          </div> : <> </>}

          {platforms?.includes("Facebook") ? <div className="">
          <FaFacebook className={`mx-auto mt-3 text-9xl`}  />
          </div> : <> </>}

          {platforms?.includes("Telegram") ? <div className="">
          <FaTelegram className={`mx-auto mt-3 text-9xl`}  />
          </div> : <> </>}

          {platforms?.includes("WhatsApp") ? <div className="">
          <FaWhatsapp className={`mx-auto mt-3 text-9xl`}  />
          </div> : <> </>}

          {platforms?.includes("Spotify") ? <div className="">
          <FaSpotify className={`mx-auto mt-3 text-9xl`}  />
          </div> : <> </>}

          {platforms?.includes("Youtube") ? <div className="">
          <FaYoutube className={`mx-auto mt-3 text-9xl`}  />
          </div> : <> </>}
     </div></>
    )
  }