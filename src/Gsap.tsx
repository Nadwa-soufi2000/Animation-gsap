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
        scale: 2,
        rotation: 360,
        duration: 3,
        ease: 'bounce.out',

      })
      console.log("okfijgi")
    }, [])

   //const timeline = gsap.timeline({
   // repeat: -1,
   // repeatDelay: 1,
   // yoyo: true,
  // })

  // useGSAP(() => {
   // timeline.to( boxRef , {
   //   x: 250,
    //  rotation: 360,
    //  borderRadius: "100%",
    //  duration: 2,
    //  ease: "back.inOut"
   // })

   // timeline.to( boxRef , {
    //  y: 250,
    //  scale: 2,
    //  rotation: 360,
    //  borderRadius: "100%",
    //  duration: 2,
    //  ease: "back.inOut"
   // })
//
    //timeline.to( boxRef , {
    //  x: 500 ,
    //  scale: 1,
    //  rotation: 360,
     // borderRadius: "8px",
    //  duration: 2,
    //  ease: "back.inOut"
   // })
   //} ,[])

    return(
        <div className="flex justify-center items-center flex-col gap-9 p-8">
           <button onClick={() => {
             //if(timeline.paused()) {
             // timeline.play();
             //} else {
             // timeline.pause();
             //}
           }}
           className="flex justify-center items-center w-[170px] h-[55px] bg-gray-400 text-white rounded-[12px] shadow-xl hover:scale-[1.04] duration-500"
           >Play/Pause</button>
           <div ref={boxRef} className="w-[100px] h-[100px] bg-red-500 shadow-xl"></div>
        </div>
    )
}