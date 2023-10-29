
import AccordionList from "./AccordionList"

const RestaurantCategory = (props) => {
    //This will set showing accordion as uncontrolled component
    // const [showAccordion,setShowAccordion]=useState(false)

    let { categoryData,showAccordion,setShowIndex } = props || {}

//Click Handler for Accordion
const handleClick=()=>{
    console.log("clicked")
    //This is for uncontrolled component that toggles the accordion
    // setShowAccordion(!showAccordion)
    setShowIndex()
   
}

  
    console.log("category data", categoryData)
    return <div>
        {/* Accordian Header CSS  */}
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
            <div className="flex justify-between " onClick={handleClick}>
            <span className="font-bold text-lg">{categoryData.title}     ({categoryData.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        {showAccordion?<AccordionList accordionData={categoryData.itemCards}></AccordionList>:<></>}
        
    </div>
    </div>
}
export default RestaurantCategory