import RestaurantCard from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import RESTAURANT_LIST from "../utils/swiggymockapidata";

const Body = () => {
  let [listOfRestaurants,setListOfRestaurants]=useState(RESTAURANT_LIST) 

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
         onClick={()=>{
            let filteredListOfRestaurants=listOfRestaurants.filter((res)=>
                res.data.avgRating>4
            )
            setListOfRestaurants(filteredListOfRestaurants)
            console.log(listOfRestaurants)
         }
         
        }
       
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <Restaurant resData={restaurantList[0]}></Restaurant>
          <Restaurant resData={restaurantList[1]} ></Restaurant>
          <Restaurant resData={restaurantList[2]} ></Restaurant>
          <Restaurant resData={restaurantList[3]} ></Restaurant>
          <Restaurant resData={restaurantList[4]} ></Restaurant>
          <Restaurant resData={restaurantList[5]} ></Restaurant>
          <Restaurant resData={restaurantList[6]} ></Restaurant>
          <Restaurant resData={restaurantList[7]} ></Restaurant> */}

        {listOfRestaurants.map((res, index) => {
         
          // return (
          //   // <RestaurantCard key={res.data.id} resData={res}></RestaurantCard>
          // );
        })}
      </div>
    </div>
  );
};
export default Body;
