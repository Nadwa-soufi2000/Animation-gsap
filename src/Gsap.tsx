import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useRef } from "react"
export default function Gsap() 
{
  const boxRef = useRef(null);

    useGSAP(() => {
      gsap.fromTo(boxRef.current , 
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%"
      }
      , 
      {
        x: 250 ,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 3,
        ease: 'bounce.out',

      })
      console.log("okfijgi")
    }, [])
    return(
        <div className="flex justify-center items-center p-8">
           <div ref={boxRef} className="w-[200px] h-[200px] bg-red-500 shadow-xl"></div>
        </div>
    )
}