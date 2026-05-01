import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo , smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"

export default function Hero() 
{
  const[videoSrc , setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)
  
  const handleVideoSrcSet = () => 
  {
    if(window.innerWidth < 760)
    {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
   window.addEventListener("resize" , handleVideoSrcSet)

   return () => {
    window.removeEventListener("resize" , handleVideoSrcSet)
   }
  }, [])

  useGSAP(() => {
    gsap.to("#hero" , { opacity : 1 , delay : 2})
    gsap.to("#cta" , { opacity : 1 , y: -50 , delay: 2 })
  }, [])


    return(
        <section className="w-full nav-height bg-black relative">
          <div className="h-5/6 w-full flex items-center flex-col justify-center p-4">
            <p id="hero" className="text-center font-semibold text-3xl text-gray-400 opacity-0 max-md:mb-10">iphone 15 Pro</p>
            <div className="md:w-10/12 w-9/12 flex justify-center items-center">
             <video autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none">
              <source src={videoSrc} type="video/mp4"/>
             </video>
            </div>
          </div>
          <div
           id="cta"
           className="flex flex-col items-center gap-5 opacity-0 translate-y-20"
          >
           <a href="#hieghlights" className="w-[80px] h-[44px] flex justify-center items-center text-white rounded-full bg-blue-500 hover:bg-blue-600">Buy</a>
           <p className="font-normal text-xl text-white">From $199/month or $999</p>
          </div>
        </section>
    )
}