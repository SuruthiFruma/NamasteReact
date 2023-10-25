
const Restaurant = (props) => {
  console.log("props",props)
  const {resData}=props||{}
  
  const {name,cuisines,sla,costForTwo,avgRating,cloudinaryImageId}=resData||{}
  const {deliveryTime}=sla|{}

  const StyleCard = {
      backgroundColor: "#f0f0f0",
    };
  return (
   
    <div className="res-card m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200" >
        
      <img
        className="res-logo rounded-lg"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}
      ></img>
        <h3 className="font-bold py-5 text-lg">{name}</h3> 
       <h4>{cuisines.join(",")}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>  
    </div>
  );
};

export default Restaurant