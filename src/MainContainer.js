import { Outlet } from "react-router-dom"
import Header from "./Header"
import Slider from "./Slider"

const MainContainer = ()=> {
    return (
        <>
        <Header />
        <div className="flex"> 
            <Slider />
            <Outlet />  
        </div>
        </>
    )
}

export default MainContainer