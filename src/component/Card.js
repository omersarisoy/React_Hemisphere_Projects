import React from "react";

const Card = ({soner}) => {
    // console.log(soner) 
    return(
        <div className="card">

            <img src={soner.img} alt="character" />
            <div className="card-info">
                <h1>{soner.name}</h1>
                <h3>{soner.nickname}</h3>
                <p>{soner.birthday}</p>
                <p>{soner.status}</p>
                <p>{soner.portrayed}</p>
            </div>

        </div>
    )
}

export default Card;