import {  RES_LOGO_URL } from "../utilits/urls";

const ResCard = (props) => {
    const {redData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = redData.info
    return <div className="res_card_main_con">
        <div className="res_logo">
            <img alt="res_logo" src={RES_LOGO_URL+cloudinaryImageId} />            
        </div>
        <div className="res_details">
                <h4>{name}</h4>
                <h5>{cuisines.join(', ')}</h5>
                <h6>{avgRating} Ratings</h6>
                <h6>{costForTwo}</h6>
            </div>
    </div>
}

export default ResCard;