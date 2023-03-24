import {GrHomeRounded} from "react-icons/gr";
import {MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineHistory} from "react-icons/md";
import {RiVideoLine} from "react-icons/ri"
import {BiTime} from "react-icons/bi"
import {AiOutlineLike} from "react-icons/ai"
import { Shorts_icon_light } from "./constants";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

const Slider =()=>{
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen){
        return null
    }
    
    return (
        <div className="w-52 p-3 pl-5">
            <div className="flex flex-col gap-5 w-full">
            <Link to="/">
                <div className="flex gap-5 items-center w-full">
                    <GrHomeRounded className="h-5 w-5"/>
                     <p className="text-lg font-normal">Home</p>
                </div>
            </Link>

                <div className="flex gap-5 items-center w-full">
                    <img src={Shorts_icon_light} alt="shorts_img" className="h-5 w-5"/>
                     <p className="text-lg font-normal">Shorts</p>
                </div>

                <div className="flex gap-4 items-center w-full">
                    <MdOutlineSubscriptions className="h-6 w-6"/>
                     <p className="text-lg font-normal">Subscriptions</p>
                </div>
                <hr className="bg-black h-[1px]"/>
            </div>


            <div className="flex flex-col gap-5 w-full mt-5">
                <div className="flex gap-5 items-center w-full">
                    <MdOutlineVideoLibrary className="h-5 w-5"/>
                    <p className="text-lg font-normal">Library</p>
                </div>

                <div className="flex gap-5 items-center w-full">
                    <MdOutlineHistory className="h-5 w-5"/>
                     <p className="text-lg font-normal">History</p>
                </div>

                <div className="flex gap-4 items-center w-full">
                    <RiVideoLine className="h-6 w-6"/>
                     <p className="text-lg font-normal">Your Videos</p>
                </div>

                <div className="flex gap-5 items-center w-full">
                    <BiTime className="h-5 w-5"/>
                     <p className="text-lg font-normal">Watch Later</p>
                </div>

                <div className="flex gap-4 items-center w-full">
                    <AiOutlineLike className="h-6 w-6"/>
                     <p className="text-lg font-normal">Liked Videos</p>
                </div>
                <hr className="bg-black h-[1px]"/>
            </div>

            
        </div>
    )
}

export default Slider;