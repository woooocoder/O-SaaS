import Bar from "./images/increasingBar.svg"
import Eye from "./images/eye.svg"
import Analytics from "./images/analytics.svg"
import Retention from "./images/retention.svg"
const Analysis = () => {
    return ( 
        <div className="flex m-24">
            {/* get graph as svg for lhs */}
            <div>
                <img src={Analytics} alt="Analytics" className="hidden md:block w-420 md:w-auto sm:w-100" width={420}/>
            </div>

            <div className="flex flex-col ml-24">
                <div className="text-2xl text-[#3023ae] mb-4">
                    Product analytics answers your questions
                </div>
                <div className="mb-6 text-lg">
                Maecenas varius nunc a odio ultrices, non consectetur nunc scelerisque.
                 Mauris nec condimentum est, id eleifend orci.
                </div>

                <div>
                    <div className="mb-16">
                        <div className="flex items-center">
                            <img src={Eye} alt="Eye" />
                            <h2 className="text-lg text-[#3023ae] ml-4">Better understand your customers</h2>
                        </div>
                        <p className="ml-14">
                            Explain the features and what it acompolishes. What does
                            your company offer that will improve or solve a problem?
                        </p>
                    </div>
                    <div className="mb-16">
                        <div className="flex items-center">
                            <img src={Bar} alt="Bar" />
                            <h2 className="text-lg text-[#3023ae] ml-4">Improve acquisition</h2>
                        </div>
                        <p className="ml-14">
                            Lacinia condimentum lectus dolor viverra nunc. Mauris quis
                            condimentum orci. Curabitur hendrerit, felis vitae.
                        </p>

                    </div>
                    <div className="mb-16">
                        <div className="flex items-center">
                            <img src={Retention} alt="Retention" />
                            <h2 className="text-lg text-[#3023ae] ml-4">Drive customer retention</h2>
                        </div>
                        <p className="ml-14">
                            Curabitur quis purus congue ante interdum mattis sit amet at ante.
                            Nulla volutpat, magna quis convallis tristique.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis