import { useEffect } from "react";
import {useDispatch} from "react-redux";
import {openMenu} from "./utils/appSlice"
import ButtonContainer from "./ButtonsContainer";
import VideoContainer from "./VideoContainer";

const VideoMainContainer =()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(openMenu())
    }, [])

    return(
    
        <div className="p-4">
             <ButtonContainer />
             <VideoContainer />
         </div>
    )
}

export default VideoMainContainer;