import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import "./index.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from "../REdux/slice";

export const Products =()=>{
    const dispatch = useDispatch()
    const data = useSelector(state=>state.cart)

    const [list, setList] = useState([]);
    const [updatedList , setUpdatedList] = useState(list); 
    const [searchValue, setSearchValue] = useState("")
    const [sortValue, setSortValue] = useState("asc")
    const [addedList, setAddedList] = useState([]);

    const getData=async()=>{
        const response = await fetch("https://dummyjson.com/products");
        if(response.ok === true){
            const data = await response.json();
            const copyList= [...data.products];
            const sortedList = copyList.sort((a,b)=>{
            return  Number(a.price)-Number(b.price) 
        }) 
            setList(copyList);
            setUpdatedList(copyList);
        }
        else{
            setList([]);
            setUpdatedList([]);
        }        
    }

    const setSearchList = () => {
        if (searchValue !== ""){
            const newSearchList = list.filter((each) =>    {
                return each.brand.toLowerCase().includes(searchValue.toLowerCase())})
                console.log(newSearchList);
            setUpdatedList(newSearchList);
        }
        else{
            setUpdatedList(list);
        }

    }

    const updateList = () => {
        const copyList= [...list];
        const sortedList = copyList.sort((a,b)=>{
            return sortValue !== "asc" ? Number(a.price)-Number(b.price) : Number(b.price)-Number(a.price) 
        }) 
        setUpdatedList([...sortedList]);
    }

    const setPriceList=(e)=>{
        setSortValue(e.target.value);
        updateList();
    }
    
    const addingItem = (e) => {
        dispatch(addItem(e));
        const newList = [...addedList, e.id];
        setAddedList(newList);
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <>
            <div className="search-sort-card">
            <div className="sort-card">
                <label>Sort by: </label>
                <select onChange={setPriceList} value={sortValue}>
                    <option value="asc">Low to High</option>
                    <option value="dsc">High to Low</option>
                </select>
            </div>
            <div className="search-card">
                <div className="search-containers">
                    <input type="search" placeholder="Search by name..." value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                    <CiSearch  type="button" onClick={setSearchList}/>
                </div>
            </div>
        </div>
        <ul>
            {updatedList.map(each=>(
                    < li key={each.id}>
                        <img src={each.thumbnail} alt="" />
                     <div className="details">    
                        <div className="brand-rating">
                            <h3>{each.brand}</h3>
                            <p>{each.rating}<FaStar/></p>
                        </div>
                        <div className="prices">
                            <h3>₹{each.price}</h3>
                            <h4>₹{Math.round(each.price/((100-each.discountPercentage)/100))}</h4>
                            <h3>{each.discountPercentage} off</h3>
                        </div>
                        <div className="buttons">
                            <button >View Details</button>
                            <button style={{backgroundColor : addedList.includes(each.id) ? "grey": "inherit",
                            color : addedList.includes(each.id) ? "#fff": "inherit",
                            border : addedList.includes(each.id) ? "0px": "1px solid #090979",
                         }} type="button" disabled={addedList.includes(each.id) ? true:false} onClick={()=>addingItem(each)}>Add to cart</button>
                        </div>
                     </div>
                    </li>
                ))}
            </ul>
        </>
    )
}