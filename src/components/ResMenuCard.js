import { MENU_URL } from "../utilits/urls";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { data } from "browserslist";
import AccordianCard from "./AccordianCard";

const ResMenuCard = () => {
  const { resid } = useParams();
  const [resFullDetails, setResFullDetails] = useState(null);
  useEffect(() => {
    fetchResMenuData();
  }, []);

  const fetchResMenuData = async () => {
    const fetchResMenuDetails = await fetch(MENU_URL + resid);
    const fetchResMenuDetailsJson = await fetchResMenuDetails.json();
    setResFullDetails(fetchResMenuDetailsJson?.data);
  };
  if (resFullDetails === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resFullDetails?.cards[0]?.card?.card?.info;
  const recomendedRecipes =
    resFullDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <>
      <div className="res_full_details">
        <h1 className="res_title_here">Welcome to {name}</h1>
        <h4 style={{ marginBottom: "20px" }}>
          {cuisines.join(", ")} for {costForTwoMessage} and with {avgRating}{" "}
          Ratings
        </h4>

        {recomendedRecipes.map((res,index) => {
          if (res.card.card.title) {
            return <AccordianCard key={index} resData = {res}/>
          }
        })}
      </div>
    </>
  );
};

export default ResMenuCard;
