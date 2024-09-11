import { useState } from "react";

export default function LikeButton(){
    let [now, setNow] = useState(false);
    function checkNow(){
        setNow(!now);
    }

    let styles = {"color": "red"};
    return(
        <div>
            <p onClick={checkNow}>
                {
                    now ? (<i style={styles} className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)
                }     
            </p>
        </div>
    ); 
}