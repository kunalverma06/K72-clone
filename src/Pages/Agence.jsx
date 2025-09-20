import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";



const Agence = () => {
    gsap.registerPlugin(ScrollTrigger)

    const imageRef = useRef(null);
    const imageDivRef = useRef(null)

    const images_array = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg", "/image5.jpg", "/image6.jpg"
        , "/image7.jpg", "/image8.jpg", "/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg", "/image13.jpg"
    ]


    useGSAP(function () {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                markers: true,
                start: "top 31%",
                end: "start -96%",
                pin: true,
                scrub: 1,

                onUpdate: (elem) => {
                    let imageIndex;
                    if (elem.progress < 1) {
                        imageIndex = Math.floor(elem.progress * images_array.length);
                        
                    } else {
                        imageIndex = images_array.length-1
                    }

                    imageRef.current.src = images_array[imageIndex ] 


                }
            }
        })
    })

    return (
        <div>
            <div className="section">
                <div ref={imageDivRef} className="absolute h-[20vw] w-[15vw] rounded-3xl top-[18vw] left-[31vw] bg-red-500">
                    <img ref={imageRef} src="/image1.jpg" className="h-full w-full object-cover rounded-3xl" />
                </div>
                <div className="font-[font2] relative">
                    <div className="mt-[55vh]">
                        <h1 className="text-[19vw] text-center uppercase leading-[18vw]">Soixan7e <br></br>
                            Douze</h1>
                    </div>
                    <div className="flex justify-end ">
                        <p className="text-6xl  w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel, facilis praesentium vero nulla doloribus rerum quaerat. Laudantium repellat soluta voluptatum, perspiciatis consectetur repudiandae ipsam culpa, libero, iure facere hic!
                        </p></div>
                </div>
            </div>
            <div className="section-2 h-screen">

            </div>
        </div>
    );
}
export default Agence;