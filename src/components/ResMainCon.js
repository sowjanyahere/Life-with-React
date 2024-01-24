import ResCard from "./ResCard";
import  { useState } from "react";
import resData from "../utilits/mockdata";;

const ResMainCon = () => {
    const [restaurantsList, setRestaurantsList] = useState(resData);
    return (<div className="res_main_app_container">
        <div className="search_con">
            <button className="primary-btn" onClick={() => {
             const filteredRestaurantsList =   restaurantsList.filter(
                (res)=> res.info.avgRating > 4.6
            );
            setRestaurantsList(filteredRestaurantsList)
            }} >Top Restaurants</button>
        </div>
        <div className="res_main_con">
            {restaurantsList.map((redData)=>(
                <ResCard key={redData.info.id} redData={redData}/>
                ))}
            
        </div>
    </div>)
};


export default ResMainCon;