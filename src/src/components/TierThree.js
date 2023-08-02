import PieWhole from "../images/100percent.svg"

const TierThree = () => {

    return (
        <div className="flex-col text-center border-4 px-32 p-12 rounded-md">
            
            <div className="text-purple-400 mb-4 opacity-70">ENTERPRISE</div>
            <img className="mb-6 ml-10" src={PieWhole} alt=""/>
            <div>
                <div className="flex justify-center font-light my-10"> 
                    <p>
                        <span className="text-5xl">$359</span>/mo
                    </p>
                </div>
                <div className="flex mb-4">
                    <p>
                        <span className="font-bold">Everything in essential + </span>
                    </p>
                </div>
                <div className="flex mb-4">
                    <p>
                        <span className="font-bold">Unlimited</span> core reports
                    </p>
                </div>
                <div className="flex mb-4">
                    <p>
                        <span className="font-bold">12 Month</span> data history
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
            
            <button className="mb-8 border-2  text-pink-500 bg-white py-4 px-8 font-semibold hover:text-[#3023ae] rounded-sm">CHOOSE PLAN</button>
            
        </div>
    )
}

export default TierThree