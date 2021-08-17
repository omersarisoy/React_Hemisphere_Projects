import React from 'react'


export default function PlayerCard(props) {
    return (
    <div className="container">
      <header className="name">
        {props.name}
        </header>

      <div className="mainpart"> 

        <div className="resim">
         <img src={props.picture} ></img>
        </div>

        <div className="attributes">
          <p>
          Position:{props.position}        
          </p>

          <p>
          Date of birth/Age: {props.age}
          </p>

          <p>
          Citizenship: {props.citizien}    
          </p>

          <p>
           Height: {props.height}      
          </p>

          <p>
           Contract until: {props.contract}
          </p>

          <p >
           Market Value: {props.value}
          </p>
      </div>
    </div>
  </div>
    )
}
