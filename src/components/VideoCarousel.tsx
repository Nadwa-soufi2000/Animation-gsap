import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    const[loadedData , setLoadedData] = useState<Event[]>([]);
    const { isEnd , isLastVideo , startPlay , videoId , isPlaying } = video;

    useGSAP(() => {
      gsap.to('#video' , {
        scrollTrigger: {
          trigger: "#video" ,
          toggleActions: 'restart none none none'
        },
        onComplete: () => {
          setVideo((pre) => ({
            ...pre ,
            startPlay: true,
            isPlaying: true
          }))
        }
      })
    }, [isEnd , videoId])
    
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

    const handleLoadedMetadata = (i: number, e: Event) => setLoadedData((pre) => [...pre , e])

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

    const handleProcess = (type: string, i?: number) => 
    {
        switch(type) {
          case 'video-end' : 
           setVideo((pre) => ({...pre, End: true,
           videoId: i + 1 }))
           break;
          case 'video-last' :
            setVideo((pre) => ({...pre, isLastVideo: true }))
            break;
          case 'video-reset' : 
            setVideo((pre) => ({...pre, isLastVideo: false,
              videoId: 0 }))
              break;
          case 'play' : 
            setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying }))
              break;
          default:
            return video;
        }
    }

    return(
        <>
          <div className="flex items-center justify-start w-[70%] mx-auto h-[700px] overflow-x-auto">
            {hightlightsSlides.map((slide , i) => (
              <div key={slide.id} id="slider" className="sm:pr-20 pr-10 w-[90%] h-[100%]">
                <div className="relative w-full h-full">
                   <div className="w-[800px] h-full bg-[#000000] flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                     <video
                      id="video"
                      className="w-full object-cover"
                      playsInline={true}
                      preload="auto"
                      muted
                      ref={(el) => { VideoRef.current[i] = el! }}
                      onPlay={() => {
                        setVideo((prevVideo) => ({
                            ...prevVideo, isPlaying: true
                        }))
                      }}
                      onLoadedMetadata={(e) => 
                        handleLoadedMetadata(i , e)
                      }
                     >
                        <source src={slide.video} type="video/mp4"/>
                     </video>
                   </div>

                   <div className="absolute top-5 left-[10%] z-10">
                    {slide.textLists.map((text) => (
                        <p key={text} className="md:text-xl text-lg font-medium text-white">{text}</p>
                    ))}
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center gap-4 mt-10">
            <div className="flex justify-center items-center py-5 px-7 bg-gray-500 backdrop-blur rounded-full">
                {VideoRef.current.map((_,i) => (
                    <div 
                      key={i} 
                      ref={(el) => { VideoDivRef.current[i] = el! }}
                      className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                     >
                      <span 
                       className="absolute h-full w-full bg-gray-400 rounded-full"
                       ref={(el) => { VideoSpanref.current[i] = el! }}
                      >
                      </span>
                     </div>
                ))}
            </div>

            <button className="rounded-full w-[50px] h-[50px] bg-gray-500 flex justify-center items-center">
              <img 
                src={isLastVideo ? replayImg :
                  !isPlaying ? playImg : pauseImg}
                alt={isLastVideo ? "replay" :
                  !isPlaying ? 'play' : 'pause'}
                onClick={isLastVideo
                  ? () => handleProcess('video-reset')
                  : !isPlaying
                  ? () => handleProcess('play')
                  : () => handleProcess('pause')
                }
              />
            </button>
          </div>
        </>
    )
}