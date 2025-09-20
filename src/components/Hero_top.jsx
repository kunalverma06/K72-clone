import Video from "./Video";

const Hero_Top = () => {
  return (
    <div className=" font-[font1] text-white pt-4">
        <div className="text-[9.5vw] uppercase leading-[9vw] flex justify-center "> L'étincelle</div>
        <div className="text-[9.5vw] uppercase leading-[9vw] flex justify-center ">
            qui
          <div className="w-[28vh] h-[12.5vh] relative rounded-full overflow-hidden ">
              <Video className="w-full h-full object-cover" />
          </div>
          génère
        </div>
        <div className="text-[9.5vw] uppercase leading-[9vw] flex justify-center ">la créativité</div>
    </div>
  );
};

export default Hero_Top;
