import TierOne from "./components/TierOne"
import TierTwo from "./components/TierTwo"
import TierThree from "./components/TierThree"

const Pricing = () => {

    return (
        <>
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
                <div className="flex justify-between mb-48">
                    <TierOne />
                    <TierTwo />
                    <TierThree />
                </div>
            </div>
            <div className="border-b mb-40"></div>
        </>
    )
}

export default Pricing