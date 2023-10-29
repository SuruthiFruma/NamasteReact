
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {
    const { resid } = useParams()
    const resData = useRestaurantMenu(resid)
    const [showIndex,setShowIndex]=useState(0)

    let menuCards = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    console.log("cards", menuCards)
    //Constructing category cards
    let categories = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category =>
        category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log("category cards", categories)
    if (resData.length === 0) return (<Shimmer></Shimmer>)
    return (
        <div className="text-center">
            <h2 className="font-bold my-4 text-2xl">{resData?.data?.cards[0]?.card?.card?.info?.name}</h2>
            <h3 className="font-bold text-xl">{resData?.data?.cards[0]?.card?.card?.info?.avgRating}  -    {resData?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            {/* {menuCards.map((menu) => {
                return <li key={menu.card.info.id}> {menu.card.info.name}</li>

            })} */}

            {categories.map((category, index) =>
                // Controlled Component
                (<RestaurantCategory key={category?.card?.card?.title}
                 categoryData={category.card.card} 
                 showAccordion={index === showIndex ? true : false} 
                 setShowIndex={() => setShowIndex(index)}>
                 </RestaurantCategory>))}



        </div>
    )
}
export default RestaurantMenu