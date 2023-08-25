import { useEffect } from "react"
import { MENU_API } from "../utils/constants"
import { useParams } from "react-router-dom"
import { useState } from "react"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const { resid } = useParams()
    const [resData, setResData] = useState('')
    useEffect(() => {
        fetchMenuData()
    }, [])

    const fetchMenuData = async () => {
        const data = await fetch(MENU_API + resid, {
            method: 'GET',
            crossorigin: true,
            redirect: "follow",
        })
        const parsedData = await data.json()
        setResData(parsedData)
    }

let menuCards = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    console.log("cards", menuCards)
if (resData.length === 0) return (<Shimmer></Shimmer>)
    return (
        <div className="menu">
            <h2>{resData?.data?.cards[0]?.card?.card?.info?.name}</h2>
            <h3>{resData?.data?.cards[0]?.card?.card?.info?.avgRating}  -    {resData?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            {menuCards.map((menu) => {
                return <li key={menu.card.info.id}> {menu.card.info.name}</li>

            })}
        </div>
    )
}
export default RestaurantMenu