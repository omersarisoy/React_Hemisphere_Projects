import React from "react";
import Northpicture from "./img/Northern-Hemisphere.png";
import Southpicture from "./img/Southern-Hemisphere.jpg";
import "./hemisphere.css"

const HemisphereDisplay = ({latitude}) => {
    const hemisphereConfig ={
        Northern : {
            text : "You are in Northern Hemisphere",
            picture: Northpicture

        },
        Southern : {
            text : "You are in Southern Hemisphere",
            picture : Southpicture

        }
    }
    const hemisphere = latitude > 0 ? "Northern" : "Southern";
    const {text, picture} = hemisphereConfig[hemisphere]

    return(
        <div className={hemisphere}>
            <div className="ui raised text container segment" >
                <div className="image">
                    <img src={picture} alt="hemisphere picture"/>
                </div>

                <div className="ui teal bottom attached label">
                    <h1> {text} </h1>

                </div>

            </div>   
        </div>
    )
}

export default HemisphereDisplay;
            
            