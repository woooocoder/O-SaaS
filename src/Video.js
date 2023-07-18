import { AiFillPlayCircle } from "react-icons/ai"
const Video = () => {

    return (
        <div className="flex flex-col items-center mt-48 bg-cyan-400">
            <div className="mt-36">
                <AiFillPlayCircle size={40} color="#8c1aff" className="bg-purple hover:bg-gradient-to-bl from-yellow-200 to-red-500 ml-4"/>
                <p className="text-xs my-6">WATCH VIDEO</p>
            </div>
            <div className="font-light text-4xl">
                Unlock The Potential
            </div>
            <div className="text-center text-md mt-6 pb-36">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Integer est tellus, pulvinar ac iaculis vel, 
                varius <br /> eu arcu. Integer id lectus posuere nisi dignissim <br /> gravida at ac justo. Ut nec dui rutrum, 
                cursus mauris <br /> sed integer eu vel.
            </div>
            
        </div>
    )
}

export default Video