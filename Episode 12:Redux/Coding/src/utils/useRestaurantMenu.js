import { useEffect,useState } from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu=(resid)=>{
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
    return resData
}
export default useRestaurantMenu