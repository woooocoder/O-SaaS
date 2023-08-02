import { BiCircle } from "react-icons/bi"
const Footer = () => {

    return (
        <>
            <div>
                        <BiCircle size={20} color="#3023ae" className="mb-4 ml-80"/>
                <div className="flex justify-between mx-80 mb-24">
                    <div className="flex-col">
                        <div>
                            <h3 className="mb-4 text-[#3023ae]">
                                VANCOUVER 
                            </h3>
                            <div className="mb-16 text-gray-600">
                                400-401 West Georgia Street <br />
                                Vancouver, BC, Canada, V6B 5A1
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-[#3023ae]">
                                BERLIN 
                            </h3>
                            <div className="text-gray-600">
                                Fredrichstrabe 68 <br />
                                10117 Berlin, Germany
                            </div>
                        </div>
                    </div>

                    <div className="flex-col">
                        <h3 className="mb-4 text-[#3023ae]">FOLLOW US ON</h3>
                        <div className="flex-col">
                            <div className="mb-2 hover:underline text-gray-500">Twitter</div>
                            <div className="mb-2 hover:underline text-gray-500">Facebook</div>
                            <div className="mb-2 hover:underline text-gray-500">LinkedIn</div>
                            <div className="mb-2 hover:underline text-gray-500">Instagram</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-[#3023ae]">ABOUT US</h3>
                        <div className="mb-4 text-gray-600">
                            Since 2009, Unbounce has helped marketers and digital <br />
                            agencies increase website and campaign conversions.
                        </div>

                        <div className="text-gray-600">
                            &copy; 2018 Insert Name Here. All rights reserved
                        </div>
                    </div>


                </div>
            </div>

            <div className="pb-24 bg-[#3023ae] bg-gradient-to-br from-[#3023ae] to-purple-800"></div>
        
        </>
    )
}

export default Footer