import PieQuarter from "./images/25percent.svg"
import PieHalf from "./images/50percent.svg"
import PieWhole from "./images/100percent.svg"
const Pricing = () => {

    return (
        <div className="-mt-48 mx-[15%] bg-white rounded-lg">
            <div className="text-center mb-24">
                <h1 className="text-semibold text-6xl  pt-24 mb-8 text-[#3212ae]">
                    The Pricing Plan
                </h1>
                <p className="text-2xl">
                The most powerful analytics to understand how people use <br /> your app or website. Choose from any
                 of our pricing plans that <br /> work to fit you as you grow.
                </p>
            </div>
            <div className="flex justify-between">
                <div className="flex-col text-center border-4 px-32 p-12">
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
                        <div className="mb-32">A/B Testing</div>

                    </div>

                    <button className="border-2 text-pink-500 py-1 px-2">CHOOSE PLAN</button>
                    
                </div>

                <div className="flex-col text-center border-4 px-32 p-12">
                    <div className="text-purple-400 mb-4 opacity-70">ESSENTIAL</div>
                    <img className="mb-6 ml-6" src={PieHalf} alt=""/>
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
                        <div className="mb-32">A/B Testing</div>

                    </div>

                    <button className="border-2 text-pink-500 py-1 px-2">CHOOSE PLAN</button>
                    
                </div>
                

                <div className="flex-col text-center border-4 px-32 p-12">
                    <div className="text-purple-400 mb-4 opacity-70">ESSENTIAL</div>
                    <img className="mb-6 ml-6" src={PieWhole} alt=""/>
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
                        <div className="mb-32">A/B Testing</div>

                    </div>

                    <button className="border-2 text-pink-500 py-1 px-2">CHOOSE PLAN</button>
                    
                </div>
            </div>
            

        </div>
    )
}

export default Pricing