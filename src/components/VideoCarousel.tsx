import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

export default function VideoCarousel() 
{
    const VideoRef = useRef<HTMLVideoElement[]>([])
    const VideoSpanref = useRef<HTMLSpanElement[]>([])
    const VideoDivRef = useRef<HTMLDivElement[]>([])

    const[video , setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    })
    const[loadedData , setLoadedData] = useState([]);
    const { isEnd , isLastVideo , startPlay , videoId , isPlaying } = video;
    
    useEffect(() => {
      if(loadedData.length > 3) {
        if(!isPlaying) {
            VideoRef.current[videoId].pause();
        }
        else {
            startPlay && VideoRef.current[videoId].play();
        }
      }
    }, [startPlay , videoId , isPlaying , loadedData])

    useEffect(() => {
      const currentProgress = 0;
      let span = VideoSpanref.current;

      if(span[videoId]) {
        // animate the progress of the video
        let anim = gsap.to(span[videoId] , {
            onUpdate: () => {

            }
            ,
            onComplete: () => {

            }
        })
      }
    }, [])

    return(
        <>
          <div className="flex items-center">
            {hightlightsSlides.map((slide , i) => (
              <div key={slide.id} id="slider" className="sm:pr-20 pr-10">
                <div className="">
                   <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                     <video
                      id="video"
                      playsInline={true}
                      preload="auto"
                      muted
                      ref={(el) => { VideoRef.current[i] = el! }}
                      onPlay={() => {
                        setVideo((prevVideo) => ({
                            ...prevVideo, isPlaying: true
                        }))
                      }}
                     >
                        <source src={slide.video} type="video/mp4"/>
                     </video>
                   </div>

                   <div className="absolute top-12 left-[5%] z-10">
                    {slide.textLists.map((text) => (
                        <p key={text} className="md:text-2xl text-xl font-medium">{text}</p>
                    ))}
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center mt-10">
            <div className="flex justify-center items-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                {VideoRef.current.map((_,i) => (
                    <div 
                      key={i} 
                      ref={(el) => { VideoDivRef.current[i] = el! }}
                      className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                     >
                      <span 
                       className="absolute h-full w-full rounded-full"
                       ref={(el) => { VideoSpanref.current[i] = el! }}
                      >

                      </span>
                     </div>
                ))}
            </div>
          </div>
        </>
    )
}