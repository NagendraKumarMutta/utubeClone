import {FaUserCircle} from "react-icons/fa";
import { views, timeCount} from "./helper";


const Video =({videos} )=>{
    
    const {snippet, statistics} = videos
    const {channelTitle,thumbnails, title, publishedAt} = snippet
    let {viewCount} = statistics

    let viewsCount = views(viewCount);
    let timesCount = timeCount(publishedAt)
    
    return(

        <div className="bg-slate-50 rounded-lg shadow-lg p-2 w-[360px] m-4 hover:scale-110 cursor-pointer">
            <img src={thumbnails.medium.url}  alt="thumbnail" className="w-full rounded-lg"/>
            <div className="flex pt-2">
               <FaUserCircle className="w-9 h-9"/>
               <div className="ml-3 text-base w-3/4">
                <h1>{title}</h1>
                <p className="text-sm font-light text-slate-600">{channelTitle}</p>
                <p className="text-sm font-light text-slate-600">{viewsCount} views . {timesCount}</p>
               </div>
            </div>
        </div>

    )
}

export default Video;