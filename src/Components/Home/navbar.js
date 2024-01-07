import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

export const Navbar=()=>{
    const data = useSelector(state=>state) 

    return ( 
    <nav className="navbars">
        <h5>OneTech</h5>
        <div title="profile" className="profile">
            <CgProfile />
            <div  className="cart-card">
            <Link to="/cart">
            <button>
                <FaCartShopping />
            </button>
            </Link>
            {data.cart.value.length === 0? "" : <p>{data.cart.value.length}</p>}
            </div>
            
        </div>
    </nav>
)}