import React, {useEffect, useState} from "react";

//include images into your bundle

//create your first component
const TrafficLight = (props) => {

    const [trafficColor, setTrafficColor] = useState(null);

    useEffect(()=> {

    },[trafficColor])

    return(
        <div>
            <button onClick={()=> setTrafficColor('red')} className={"redbutton glow"}/>
            <button onClick={()=> setTrafficColor('yellow')}/>
            <button onClick={()=> setTrafficColor('green')}/>
        </div>
    );
}

export default TrafficLight;
