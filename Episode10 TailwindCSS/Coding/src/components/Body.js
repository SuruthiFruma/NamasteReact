import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import { restaurantList } from "../utils/constants";
import { swiggy_api_url } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

    let [listofrestaurants, setListofRestaurants] = useState([])
    let [filteredRestaurants,setFilteredRestaurants]=useState([])
    let [searchText, setSearchText] = useState("")


    useEffect(() => {
        console.log("useEffect Called")
        fetchRestaurantData()
    }, [])
    const fetchRestaurantData = async () => {
        let data = await fetch(swiggy_api_url)
        console.log(data)
        let parsedData = await data.json()
        console.log(parsedData)
        let restaurantList = parsedData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListofRestaurants(restaurantList)
        setFilteredRestaurants(restaurantList)
    }

   //Method that searches for restaurant from the typed string
    const searchRestaurants=()=>{
        let searchedRestaurants=listofrestaurants.filter((res)=>
             res.info.name.toLowerCase().includes(searchText)
        )
        setFilteredRestaurants(searchedRestaurants)
    }



    //Component loads first and after this only useffect will be called


    // if(listofrestaurants.length===0){
    //     return <h1>Loading....</h1>
    // }


    //Conditional Rendering to render shimmer UI or the actual Body Components after useffect is executed for api calls
    return listofrestaurants.length === 0 ? <Shimmer></Shimmer> :
        (
            <div className="body ">
<div className="flex">
                {/* Search implementation goes here              */}
                <div className="search p-1 ">
                    <input className="border border-solid border-black" type="text" value={searchText} onChange={(event)=>{
                         setSearchText(event.target.value)
                    }}></input>
                    <button className="searchBtn px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={searchRestaurants}>  Search </button>
                </div>


                {/* Top rated restaurants */}
                <div className="top-rating p-1 m-4">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        let topRatedRestaurants = listofrestaurants.filter((res) =>
                            res.info.avgRating > 4.3
                        )
                        console.log(topRatedRestaurants)
                        setFilteredRestaurants(topRatedRestaurants)
                    }}>Top rated Restaurants</button>
                </div>
                </div>
                <div className="res-container flex flex-wrap rounded-lg">
         {/* <Restaurant resData={restaurantList[0]}></Restaurant>
          <Restaurant resData={restaurantList[1]} ></Restaurant>
          <Restaurant resData={restaurantList[2]} ></Restaurant>
          <Restaurant resData={restaurantList[3]} ></Restaurant>
          <Restaurant resData={restaurantList[4]} ></Restaurant>
          <Restaurant resData={restaurantList[5]} ></Restaurant>
          <Restaurant resData={restaurantList[6]} ></Restaurant>
          <Restaurant resData={restaurantList[7]} ></Restaurant> */}

                    {filteredRestaurants.map((res, index) => {
                        {console.log(res)}
                       return <Link to={"/restaurant/"+res.info.id} key={res.info.id}><Restaurant  resData={res.info}></Restaurant></Link>
                       //return <Restaurant onClick={<Link to={"/restaurant/"+res.info.id}></Link>} resData={res.info}></Restaurant>
                    })}
                </div>
            </div>
        );
};

export default Body