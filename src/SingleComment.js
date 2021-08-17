import React from "react";


const SingleComment = (props) => {
    return(
        <div className = "ui comments">
          <div className = "comment">

            <div style = {{fontSize:"20px", backgroundColor:"aqua", color:"red"}} className="header">
              {props.header}
            </div>

            <a href="#" className = "avatar">
              <img src={props.picture} alt="profile " ></img>
            </a>

            <div className = "content">
            <a href = "#" className = "author">
              {props.name}
            </a>

            <div className = "metadata">
              <span className = "date">
                {props.date}
              </span>
            </div>
    
            <div className = "text"> 
              {props.comment}
            </div>
          </div>
          </div>
        </div>
      )
}

export default SingleComment;