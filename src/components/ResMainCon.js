import ResCard from "./ResCard";
import  { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const ResMainCon = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);
    const [searchText ,setSearchText] = useState("")

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataJson = await data.json();
        setRestaurantsList(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurantsList(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    return restaurantsList.length===0 ? (<Shimmer/>)  : (<div className="res_main_app_container">
        <div className="filter_con">
            <div className="search_con">
                <input type="text" onChange={(e)=>{
                    setSearchText(e.target.value);
                }} value={searchText} />
                <button onClick={()=>{
                    const searchRestaurantList = restaurantsList.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                    ); 
                    setFilteredRestaurantsList(searchRestaurantList);
                }}>Search</button>
            </div>
            <div>
            <button className="primary-btn" onClick={() => {
             const filteredRestaurantsList =   restaurantsList.filter(
                (res)=> res.info.avgRating > 4.6
            );
            console.log(filteredRestaurantsList)
            setFilteredRestaurantsList(filteredRestaurantsList)
            }} >Top Restaurants</button>
            </div>            
        </div>
        <div className="res_main_con">
            {filteredRestaurantsList.map((redData)=>(
                <ResCard key={redData.info.id} redData={redData}/>
                ))}
            
        </div>
    </div>)
};


export default ResMainCon;