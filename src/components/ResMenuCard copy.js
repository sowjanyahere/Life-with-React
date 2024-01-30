import { MENU_URL } from "../utilits/urls";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { data } from "browserslist";

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

        {recomendedRecipes.map((res) => {
          if (res.card.card.title) {
            return <div className="accordianCards">
              <h2 className="accordianTittle">{res.card.card.title}</h2>
              {/* {res.card.card.itemCards.map((data)=> card.info.name)} */}
              <p>{res.card.card.itemCards.map((data)=> data.card.info.name)}</p>
              <div className="accordianCardsListMainCon">                
                {/* <div className="accordianCardsList">
                  <div className="accordianCardsListLeft">
                    <p className="smallIconHere"></p>
                    <h3>Achari Khichdi</h3>
                    <h6>149/-</h6>
                    <p>
                      Serves 1 | Mighty khichdi with playful achari flavour &
                      spices for a perfect joyride of tastefulness. Served with
                      Pickle, Gur & Papad Churi. Served with Pickle of the day
                      Allergen Information- Contains Dairy
                    </p>
                  </div>
                  <div className="accordianCardsListRight">
                    <img
                      alt="dish Image"
                      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b5678129d8f9f81b8e2849cf033aebe6"
                    ></img>
                  </div>
                </div> */}
              </div>
            </div>;
          }
        })}
      </div>
    </>
  );
};

export default ResMenuCard;
