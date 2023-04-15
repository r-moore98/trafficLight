import React, {useEffect, useState} from "react";

const TrafficLight = () => {//props

    const [trafficColor, setTrafficColor] = useState(null);

    return(
        <div className="TrafficLight">
            <button onClick={()=> setTrafficColor('red')} 
            className={
                "redbutton " + (trafficColor === "red" ? "redglow":"")}/>
            <button onClick={()=> setTrafficColor('yellow')} 
            className={
                "yellowbutton "+ (trafficColor === "yellow" ? "yellowglow":"")}/>
            <button onClick={()=> setTrafficColor('green') } 
            className={
                "greenbutton " + (trafficColor === "green" ? "greenglow":"")}/>
        </div>
    );
}

export default TrafficLight;
