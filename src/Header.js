import {GiHamburgerMenu} from "react-icons/gi"
import {BiVideoPlus} from "react-icons/bi";
import {IoMdNotificationsOutline} from "react-icons/io";
import {FaUserCircle} from "react-icons/fa";
import {BsSearch} from "react-icons/bs"
import { youtube_image } from "./constants";
import { microphone_image } from "./constants";
import {useDispatch} from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {youtube_api_suggestions} from "./constants";


const Header =()=> {

    const [searchKey, setSearchKey] = useState("");
    const [result, setResult] = useState([]);
    console.log(result);

    const dispatch = useDispatch();
    
    const handleToggle = ()=>{
        dispatch(toggleMenu())
    }

    useEffect(()=>{
        getSuggestions()

    }, [searchKey])

    async function getSuggestions() {
        try{
        const response = await fetch(youtube_api_suggestions + searchKey, { mode: "no-cors", headers:{"Content-Type":"application/json"} });
        const json = await response.json();
        }catch(err){
            console.log(err);
        }
       
    }
 

 return(
        <div className="p-4 flex justify-between">
                <div className="flex gap-5 items-center">
                    <GiHamburgerMenu className="cursor-pointer" onClick={()=> {handleToggle()}}/>
                    <Link to={"/"}>
                        <img src={youtube_image} alt="youtubeImg" className="h-6"/>
                    </Link>
                </div> 
        
            <div className="flex items-center">
                <input value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}} placeholder="Search" className="border border-slate-400 border-r-0 outline-none rounded-l-full p-1 pl-4 text-lg font-normal h-10 w-[500px]" />
                <button className="bg-slate-100 shadow-md h-10 w-16 border border-slate-400 pl-5 rounded-r-full hover:bg-slate-200" type="button"><BsSearch className="h-5 w-5"/></button>
                <img src={microphone_image} alt="microphoneImg" className="h-5 pl-3"/>
            </div>

            <div className="flex gap-3 items-center">
                <BiVideoPlus />
                <IoMdNotificationsOutline />
                <FaUserCircle className="h-8 w-8"/>
            </div>
        </div>
    )
}

export default Header;