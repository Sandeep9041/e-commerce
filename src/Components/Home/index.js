import CarouselCaption from "react-bootstrap/esm/CarouselCaption";
import { Products } from "../Products"
import ControlledCarousel from "./carousal"
import { Navbar } from "./navbar";
import Cookies from "js-cookie";
import { useNavigate , Navigate } from "react-router-dom";

export const Home =()=>{
    const cookies = Cookies.get("token")
    if (cookies === undefined){
        return <Navigate to="/login" />;
    }
    return (
        <>
        <Navbar />
        <ControlledCarousel />        
        <Products/>
        </>
    )
}