import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {

    const StyleCard = {
        backgroundColor: "#f0f0f0",
      };
    
    const {resData}=props||{}
    const {data}=resData||{}
    const {name,cuisines,slaString,costForTwo,avgRating}=data||{}
    return (
     
      <div className="res-card" style={StyleCard}>
          
        <img
          className="res-logo"
          src={CDN_URL+resData.data.cloudinaryImageId}
        ></img>
          <h3>{name}</h3> 
         <h4>{cuisines.join(",")}</h4>
        <h4>{slaString}</h4>
        <h4>Rs {costForTwo/100} for 2</h4>
        <h4>{avgRating}</h4>  
      </div>
    );
  };

  export default RestaurantCard