

const AccordionList = (props) => {
    let { accordionData } = props || {}
    console.log("accordion data", accordionData)
    return (<div>

        {accordionData.map((item) => (
            <div className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between" key={item.card.info.id}>
                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - Rs. {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                    </div>

                    <p className="text-xs">
                        {item.card.info.description}
                    </p>
                </div>
                <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="p-[3] mx-10 rounded-lg bg-gray-500 text-white shadow-lg">Add +</button>
                        {/* <img className="w-0"
                            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.card.info.imageId}
                        ></img> */}
                    </div>
                </div>
            </div>
        ))}

    </div>)
}
export default AccordionList