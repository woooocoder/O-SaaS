import { AiFillPlayCircle } from "react-icons/ai"
const Video = () => {

    function MouseOver(e) {
        e.target.style.opacity = "70%"
        e.target.style.color = "red"
    }

    function MouseOut(e) {
        e.target.style.opacity = "100%"
        e.target.style.color = "#3023ae"
    }
    return (
        <div className="flex flex-col items-center mt-48 bg-cyan-400">
            <div className="mt-36">
                <AiFillPlayCircle size={100} color="#3023ae"
                 onMouseOver={MouseOver}
                 onMouseOut={MouseOut}
                 className="bg-purple hover:fill-gradient-to-bl from-yellow-200 to-red-500 ml-4"/>
                <p className="text-xs my-6 ml-6 text-[#3023ae] opacity-60">WATCH VIDEO</p>
            </div>
            <div className="font-semibold text-4xl text-[#3023ae]">
                Unlock The Potential
            </div>
            <div className="text-center text-xl mt-6 pb-36 opacity-90 text-[#3023ae]">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Integer est tellus, pulvinar ac iaculis vel, 
                varius <br /> eu arcu. Integer id lectus posuere nisi dignissim <br /> gravida at ac justo. Ut nec dui rutrum, 
                cursus mauris <br /> sed integer eu vel.
            </div>
            
        </div>
    )
}

export default Video