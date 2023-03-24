import { useState } from "react";
import { btnArray } from "./constants";

const ButtonContainer = () => {
    const [btn, setBtn] = useState("All");

    const handleBtn=(e)=>{
        setBtn(e.target.id)
    }

    return (
        <div className="flex gap-4 flex-wrap">
           {btnArray.map(item => {
            return  <button  id={item} 
                             onClick={(e)=>{handleBtn(e)}} 
                             className={btn===item ? "bg-black text-white font-normal text-base px-4 h-8 rounded-lg": "bg-slate-200 font-normal text-base px-4 h-8 rounded-lg text-black"} 
                             key={item}> 

                             {item} 

                    </button>
           })
           }
        </div>
    )
}

export default ButtonContainer;