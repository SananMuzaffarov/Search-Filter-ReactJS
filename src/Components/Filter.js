import React,{useState} from "react";
import data from "./TemplateData.json";

const Filter = () => {
    const [filteredItems, setFilteredItems] = useState("");

   return(
    <>
    <div className="container">
      <div className="searchInput">
        <input 
        type="text" 
        placeholder="Search Product Name" 
        onChange={(e) => {setFilteredItems(e.target.value)}} 
        />
      </div>
      <div className="cards">
        {data.filter((val) => {
            if(filteredItems === ""){
                return val;
            }
            else if(val.title.toLowerCase().includes(filteredItems.toLowerCase())){
                return val;
            }
            }).map((val) => {
              return(
                <div className="cardContent">
                    <img src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <p className="price">${val.price}</p>
                </div> 
              )})}
      </div>
    </div>
  </>
   );
}
export default Filter;