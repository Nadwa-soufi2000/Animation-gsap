import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useRef } from "react"
export default function Gsap() 
{
  const boxRef = useRef(null);
  const groubBoxRef = useRef(null);
  const array = [1,1,1,1,1,1]

    //useGSAP(() => {
      //gsap.fromTo(boxRef.current , 
      //{
       // x: 0,
       // rotation: 0,
       // borderRadius: "0%"
      //}
      //, 
      //{
       // x: 250 ,
       // repeat: -1,
       // yoyo: true,
       // borderRadius: "100%",
       // scale: 2,
       // rotation: 360,
       // duration: 3,
       // ease: 'bounce.out',

     // })
     // console.log("okfijgi")
   // }, [])

   //const timeline = gsap.timeline({
   // //repeat: -1,
    //repeatDelay: 1,
    //yoyo: true,
   //})

   useGSAP(() => {
    //timeline.to( boxRef.current , {
      //x: 250,
      //rotation: 360,
      //borderRadius: "100%",
      //duration: 2,
      //ease: "back.inOut"
    //})

    //timeline.to( boxRef.current , {
      //y: 250,
      //scale: 2,
      //rotation: 360,
      //borderRadius: "100%",
      //duration: 2,
     // ease: "back.inOut"
   // })

    //timeline.to( boxRef.current , {
      //x: 500 ,
      //scale: 1,
      //rotation: 360,
      //borderRadius: "8px",
      //duration: 2,
      //ease: "back.inOut"
    //})

   // gsap.to(".stagger-box", {
     // y: 250,
     // rotation: 360,
     // borderRadius: "100%",
     // repeat: -1,
     // yoyo: true,
     // // stagger 
      //stagger: {
       // amount: 1.5,
       // grid: [2 ,1],
       // axis: "y",
       // ease: "circ.inOut",
       // from: "center"
     // }
   // })
      
      gsap.to("#text" , {
        ease: "power1.inOut",
        opacity: 1,
        x: -40 ,
        y: 0,
      })

      gsap.fromTo(".para" , {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger:0.1
      })

   } ,[])

    return(
        <div className="flex justify-center items-center flex-col gap-10 p-8">
           <button onClick={() => {
             //if(timeline.paused()) {
             // timeline.play();
             //} else {
             // timeline.pause();
            // }
           }}
           className="flex justify-center items-center w-[170px] h-[55px] bg-gray-400 text-white rounded-[12px] shadow-xl hover:scale-[1.04] duration-500"
           >
             Play/Pause
           </button>
           <div ref={boxRef} className="w-[100px] h-[100px] bg-red-500 shadow-xl"></div>
           <div className="flex justify-center items-center gap-6">
            {array.map((_, index) => (
              <div ref={groubBoxRef} key={index} className="w-[80px] h-[110px] bg-purple-400 stagger-box"></div>
            ))}
           </div>
           <div className="flex flex-col items-start justify-center gap-4">
            <h1 id="text" className="text-black text-[20px]">Gsap For Text</h1>
            <p className="para text-gray-500 text-[15px]">The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa</p>
           </div>
        </div>
    )
}