import Hero_bottom from "../components/Hero_bottom"
import Hero_Top from "../components/Hero_top"
import Video from "../components/Video";

const Hero = () => {
    return (
        <div className="bg-red-900 h-screen w-screen">
            <div className="fixed">
                <Video />
            </div>
            <div className="relative">
                <Hero_Top />
                <Hero_bottom/>
            </div>
            
        </div>
    )
}
export default Hero;