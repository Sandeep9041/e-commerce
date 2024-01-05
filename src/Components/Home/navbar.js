import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import {useSelector} from "react-redux";

export const Navbar=()=>{
    const data = useSelector(state=>state) 
    console.log(data.cart.value.length)

    return ( 
    <nav className="navbars">
        <h5>OneTech</h5>
        <div title="profile" className="profile">
            <CgProfile />
            <div  className="cart-card">
            <button>
                <FaCartShopping />
            </button>
            {data.cart.value.length === 0? "" : <p>{data.cart.value.length}</p>}
            </div>
            
        </div>
    </nav>
)}