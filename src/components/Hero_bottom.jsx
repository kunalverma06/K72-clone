import { Link } from "react-router-dom";

const Hero_bottom = () => {
    return (
        <div className="font-[font2] text-white flex items-end justify-center gap-2">
            <Link to='/Projects' className="text-[5.5vw] border-3 leading-[6vw] rounded-full px-6 pt-2 hover:text-green-300">PROJECTS </Link>
            <Link to='/Agence' className="text-[5.5vw] border-3 leading-[6vw] rounded-full px-6 pt-2 hover:text-green-300">AGENCE</Link>
        </div>
    )
}

export default Hero_bottom;