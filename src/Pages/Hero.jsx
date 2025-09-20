import Hero_bottom from "../components/Hero_bottom"
import Hero_Top from "../components/Hero_top"
import Video from "../components/Video";

const Hero = () => {
    return (
        <div className="">
            <div className="fixed w-full h-full ">
                <Video />
            </div>
            <div className="h-screen w-screen relative flex flex-col gap-2 justify-between ">
                <Hero_Top />
                <Hero_bottom/>
            </div>
            
        </div>
    )
}
export default Hero;