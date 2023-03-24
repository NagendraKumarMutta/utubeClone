import {useDispatch} from "react-redux";
import { useEffect } from "react"; 
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage =()=>{
    const [searchParams] = useSearchParams();
    console.log( searchParams.get("v"))

    const dispatch = useDispatch();

    useEffect(()=>{   
       dispatch(closeMenu())

    }, [])

    return(
      <div className="pl-12">
        <iframe 
            width="1200" 
            height="700" 
            src={"https://www.youtube.com/embed/"+ searchParams.get("v") }
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>

        </iframe>
      </div>
    )

}

export default WatchPage