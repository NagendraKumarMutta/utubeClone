import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { youtube_video_api } from "./constants";
import Video from "./Video";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    
    useEffect(()=>{
        async function fetchVideos(){
             const response =  await fetch(youtube_video_api);
             const data = await response.json();
             setVideos(data.items);
        }

        fetchVideos();
    }, [])

    return (
        <div className="flex flex-wrap">
           {
            videos?.map(eachItem => 
            <Link to={"/watch?v="+eachItem.id} key={eachItem.id}>
                <Video videos={eachItem} />
            </Link>
            )
           }
             
        </div>
    )
}

export default VideoContainer;