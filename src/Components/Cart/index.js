import {useSelector,useDispatch} from "react-redux";
import "./index.css";
import { plusItem, removeItem } from "../REdux/slice";


export const MyCart = () => {
    const data = useSelector(state=>state.cart);
    const count = useSelector(state=>state.cart.count)
    const dispatch = useDispatch()
    console.log(data);
    const removeCart=(id)=>{
        dispatch(removeItem(id));
    }

    return (
        <div className="my-cart">
            <h1>My Cart</h1>
            <div>
                <ul>
                    {data.value.map(each=>(
                        <li key={each.id}>
                        <div className="cart-item-details">                        
                        <img src={each.thumbnail} alt="" className="cart-img"/>
                        <h3 className="cart-name">{each.brand}</h3>
                        <p className="cart-price">₹ {each.price}</p>
                        </div>
                        <button type="button" onClick={()=>{removeCart(each.id)}} className="remove-btn">Remove</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}