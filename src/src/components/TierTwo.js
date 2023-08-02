import PieHalf from "../images/50percent.svg"

const TierTwo = () => {
    return (
        <div className="flex-col text-center text-white rounded-md px-32 p-12 bg-gradient-to-b from-[#3023ae] to-pink-500">
            <div className="text-purple-400 mb-4 opacity-70">PREMIUM</div>
            <img className="mb-6 ml-10  " src={PieHalf} alt=""/>
            <div>
                <div className="flex justify-center font-light my-10"> 
                    <p>
                        <span className="text-5xl">$159</span>/mo
                    </p>
                </div>
                <div className="flex mb-4">
                    <p>
                        <span className="font-bold">Everything in Essential +</span> 
                    </p>
                </div>
                <div className="flex mb-4">
                    <p>
                        <span className="font-bold">Limited</span> core reports
                    </p>
                </div>
                <div className="flex mb-4">
                    <p>
                        <span className="font-bold">12 month</span> data history
                    </p>
                </div>
                <div className="flex mb-4">
                    <p>
                        <span className="font-bold">10</span> members / projects
                    </p>
                </div>
                <div className="flex mb-4">
                    <p>
                        <span className="font-bold">Unlimited</span> saved reports
                    </p>
                </div>
                <div className="mb-32">Predictive analytics</div>
            </div>
            <button className="mb-8 border-b-2 border-b-gray-400 text-pink-500 bg-white py-4 px-8 font-semibold hover:text-[#3023ae] rounded-sm">CHOOSE PLAN</button>
            
        </div>

    )
}

export default TierTwo