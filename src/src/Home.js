import Lightning from "./images/lightning.svg"
import Stairs from "./images/stairs.svg"
import Triangle from "./images/triangle.svg"

const Home = () => {


    return (
        <>
            <div className="bg-[#3023ae] px-24 pt-24 pb-96">
                <div>
                    <h1 className="text-3xl font-semibold text-white">Success starts <br /> with a great <br /> product</h1>
                    <p className="text-white text-md mt-8">Morbi leo tortor, fermentum sed orci vitae, <br />
                        tempor auctor turpis. Fusce bibendum <br /> accumsan fringilla.
                         Nulla aliquam luctus <br /> sem, at posuere nibh lobortis et.</p>

                </div>
            </div>

            <div className="-m-36 p-6 bg-white mx-8 rounded-md">
                <div className="flex items-center justify-between grid-cols-1 px-8 pt-24">
                    <div className="ml-6 flex-col text-left">
                        <img src={Stairs} alt="Stairs" />
                        <h2 className="my-6 text-2xl font-light text-[#3023ae]">
                            Understand every <br/> step of the way
                        </h2>
                        <p className="mb-5 text-xl text-gray-500">
                            Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Integer est <br/> tellus, pulvinar
                            ac iaculis vel, varius eu <br/> arcu tor vestibulum.
                        </p>
                    </div>
                    <div className="mx-6 text-left">
                        <img src={Lightning} alt="Lightning" />
                        <h2 className="my-6 text-2xl font-light text-[#3023ae]"
                            >Build faster with <br/> instant answers
                        </h2>
                        <p className="mb-5 text-xl text-gray-500">
                            Lacinia condimentum lectus dolor <br/> viverra nunc. Mauris quis <br/> condimentum orci. Curabitur 
                            <br/> hendrerit, felis vitae.
                        </p>
                    </div>
                    <div className="mr-6 text-left">
                        <img src={Triangle} alt="Triangle" />
                        <h2 className="my-6 text-2xl font-light text-[#3023ae]">
                            Unlock insights <br/> for everyone
                        </h2>
                        <p className="mb-5 text-xl text-gray-500">
                            Curabitur quis purus congue ante <br/> interdum mattis sit amet at ante. <br/> Nulla volutpat,
                            magna quis convallis <br/> tristique, purus mi sollicitudin sem.
                        </p>
                    </div>
                </div>
                    
                    {/* <div className="flex mt-16 mx-12 pt-56 mb-48 border-t-4 border-[#3023ae]">
                        <div>
                            <h2 className="text-center text-2xl font-light text-[#3023ae]">A foundation built for <br /> scale & forsight</h2>
                        </div>
                        <div>
                            <p className="ml-16 text-xl mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est <br /> tellus, pulvinar
                                 ac iaculis vel, varius eu arcu tor vestibulum.
                            </p>
                        </div>

                    </div> */}
                    <div className="flex justify-between mt-16 mx-12 pt-56 mb-48 border-t-4 border-[#3023ae]">
                        <div>
                            <h2 className="text-center ml-48 text-2xl font-light text-[#3023ae]">A foundation built for <br /> scale & forsight</h2>
                        </div>
                        <div>
                            <p className="ml-16 text-xl mr-48 mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est <br /> tellus, pulvinar
                                 ac iaculis vel, varius eu arcu tor vestibulum.
                            </p>
                        </div>

                    </div> 

            </div>
        </>
    )
}

export default Home