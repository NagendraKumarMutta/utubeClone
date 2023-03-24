
export function views(viewCount){

    if(viewCount > 1000000){
       return viewCount = parseInt(viewCount/1000000).toString()+"M"
    }else if(viewCount > 10000){
       return viewCount = parseInt(viewCount/1000).toString()+"k"
    }else{
        return viewCount
    }
}

export function timeCount(publishedAt){
    let date = publishedAt.split("T");
    let dateString = date[0].split("-") 
   
    let firstDate = new Date(parseInt(dateString[0],10), parseInt(dateString[1],10) - 1, parseInt(dateString[2],10));
     let secondDate = new Date()
     let strDatePart = (secondDate - firstDate);

     let time = ""
     if(strDatePart >= 31557600000){
        return time = parseInt(strDatePart/31557600000).toString()+ " years ago"
     }else if(strDatePart >= 2629746000){
       return time = parseInt(strDatePart/2629746000).toString()+" months ago"
     }else if(strDatePart<2629746000){
       return time = parseInt(strDatePart/86400000).toString()+" days ago"
     }
}