import { useState } from "react";

const UserFunc = ({name,location,profession}) => {
    const [count] = useState(0);
    const [count1] = useState(1);
    return <>
        <div className="user_card_main_con">
            <h1>Count = {count}</h1>
            <h1>Count1 = {count1}</h1>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>{profession}</h4>
        </div>
    </>
}

export default UserFunc;