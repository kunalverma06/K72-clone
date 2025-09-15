import Video from "./Video";

const Hero_Top = () => {
    return (
        <div className="font-[font1] text-white translate-x-4 ">
            <div className="uppercase text-[9.5vw] flex justify-center leading-[6vw] " >L'étincelle</div>

            <div className="uppercase text-[9.5vw] leading-[6vw] flex items-center justify-center">qui<div />
            <div className="w-[10rem] h-[10rem] flex justify-center ">
                <Video className="w-full h-full "></Video>
            </div>
            génère</div>

            <div className="uppercase text-[9.5vw] leading-[6vw] flex justify-center">la créativité</div>
        </div>
    )
}
export default Hero_Top;