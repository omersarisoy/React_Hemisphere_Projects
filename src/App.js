import SingleComment from "./SingleComment";
import profile1 from "./images/1.jpg";
import profile2 from "./images/2.png";
import profile3 from "./images/3.jpg";
import UserCard from "./UserCard";
import "./index.css"

const App = () => {
  return(
    <div className = "ui comments">
      <UserCard>
        <SingleComment 
        name = "Uğurcan"  
        date = "Today at 5.00 PM"
        comment = "It's amazing"
        picture = {profile1}
        header = "Uğurcan Çakır"
        />
      </UserCard>

      <UserCard> 
        <SingleComment 
        name = "Tony"   
        date = "Today at 6.00 PM"
        comment = "Great"
        picture = {profile2}
        header = "Nwakamea"
         />
      </UserCard>

    <UserCard>
        <SingleComment 
        name = "Bakasetas"  
        date = "Today at 7.00 PM"
        comment = "Well-done"
        picture = {profile3}
        header = " Bakasetas"
         />
      </UserCard>
      
    </div>
  )
}
export default App

