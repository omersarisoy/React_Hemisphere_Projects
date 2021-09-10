import Card from "./component/Card"
import { useState,useEffect } from "react";
// import data from "./data.json"
import axios from "axios";

function App(){

  const [itemList, SetItemList] = useState([]);

  useEffect(() => {
    // fetch("https://breakingbadapi.com/api/characters")
    // .then(response => response.json())
    // .then(data => {SetItemList(data); console.log(data)})
    // .catch(error => console.log(error))

    axios.get("https://breakingbadapi.com/api/characters")
    .then((ömer) => SetItemList(ömer.data))
  },[])

  return(

    <div className="App">

      <header className="header">
          <img src="https://www.logolynx.com/images/logolynx/55/55a537ca9549600cf7d1d0b274b3bc61.png" alt="Breaking Bad Logo" /> 
      </header>

      <div className="cards">
       {itemList.map((ömer) => (
         <Card key = {ömer.char_id} soner = {ömer} />
       ))}
      </div>

    </div>
  )

};

export default App;