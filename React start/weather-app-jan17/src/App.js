


import React, { useState } from "react";
import img from "./images/images.jpeg";


const App = () => {
    const[latitude,setLatitude] = useState(0);
    const[longitude,setLongitude] = useState(0);
    const[hemisphere,setHemisphere] = useState("");
    const[month,setMonth] = useState(()=>{
        return new Date().getMonth()+1 
    });


    function getlocation() {
        let lat,lang;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    lat = position.coords.latitude;
                  lang = position.coords.longitude ;
                  setLatitude(lat);
                  setLongitude(lang);
                }

            )
            if(lat>0){
                setHemisphere("northern hemisphere");
            }
            else if(lat<0){
                setHemisphere("southern hemisphere");
            }
            else{
                setHemisphere("equator")
            }
        }
    }



    return (

        <div>
            <button onClick={getlocation}> Get Location</button>
            <h1>Latitude:{latitude}</h1>
            <h1>Longitude:{longitude}</h1>
            <h1>Hemisphere:{hemisphere}</h1>
            <h1>Month:{month}</h1>

            {/* {winter condition} */}

            {
                hemisphere !== "" && hemisphere === "northern hemisphere" && (month >= 11 || month <= 3)  
                &&(
                   <div>
                    <h1>Winter</h1>
                    <img src={img} alt="winter" />


                   </div>

                )
            }
        </div>
    )
}

export default App;