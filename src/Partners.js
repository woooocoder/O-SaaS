import PowerBull from "./images/powerbull.svg"
import LifeBook from "./images/lifebook.svg"
import Javastar from "./images/javastar.svg"
import Mailbanana from "./images/mailbanana.svg"
import SocialBeer from "./images/socialbeer.svg"
import Cloudforce from "./images/cloudforce.svg"
import SimpleFolk from "./images/simplefolk.svg"
import CalmSeat from "./images/calmseat.svg"

const Partners = () => {

    return (
        <div className="bg-pink-400 pt-48 pb-80">
            <h1 className="text-center tracking-widest text-gray-600 mb-12 font-serif">TRUSTED BY 250,000 HAPPY CUSTOMERS WORLDWIDE</h1>
            <div className="flex-col">
                <div className="flex justify-center mb-20 ">
                    <img alt="" src={PowerBull} className="mr-12" />
                    <img alt="" src={LifeBook} className="mr-12"/>
                    <img alt="" src={Javastar} className="mr-12"/>
                    <img alt="" src={Mailbanana} />
                </div>
                <div className="flex justify-center">
                    <img alt="" src={SocialBeer} className="mr-12"/>
                    <img alt="" src={Cloudforce} className="mr-12"/>
                    <img alt="" src={SimpleFolk} className="mr-12"/>
                    <img alt="" src={CalmSeat} />
                </div>

            </div>
        </div>
    )
}

export default Partners