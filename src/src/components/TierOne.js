import PieQuarter from "../images/25percent.svg"

const TierOne = () => {
    return (
        <div className="border-4 rounded-md">
            <div className="flex-col text-center px-32 p-12 bg-white">
                <div className="text-purple-400 mb-4 opacity-70">ESSENTIAL</div>
                <img className="mb-6 ml-6" src={PieQuarter} alt=""/>
                <div>
                    <div className="flex justify-center font-light my-10"> 
                        <p>
                            <span className="text-5xl">$79</span>/mo
                        </p>
                    </div>
                    <div className="flex mb-4">
                        <p>
                            <span className="font-bold">Unlimited</span> projects
                        </p>
                    </div>
                    <div className="flex mb-4">
                        <p>
                            <span className="font-bold">Limited</span> core reports
                        </p>
                    </div>
                    <div className="flex mb-4">
                        <p>
                            <span className="font-bold">60 day</span> data history
                        </p>
                    </div>
                    <div className="flex mb-4">
                        <p>
                            <span className="font-bold">3</span> members / projects
                        </p>
                    </div>
                    <div className="mb-40">A/B Testing</div>
                </div>
                <button className="border-2 text-pink-500 bg-white py-4 px-6 font-semibold hover:text-[#3023ae] rounded-sm">CHOOSE PLAN</button>
            
            </div>

        </div>
    )
}

export default TierOne