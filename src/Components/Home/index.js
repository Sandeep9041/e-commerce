import CarouselCaption from "react-bootstrap/esm/CarouselCaption";
import { Products } from "../Products"
import ControlledCarousel from "./carousal"
import { Navbar } from "./navbar";
import Cookies from "js-cookie";
import { useNavigate , Navigate } from "react-router-dom";

export const Home =()=>{
    const navigate = useNavigate();
    const cookies = Cookies.get("token")
    console.log(cookies);
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