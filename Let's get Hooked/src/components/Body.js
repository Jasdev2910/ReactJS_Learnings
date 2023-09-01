import Card from "./Card";
import search from "../assets/search.png";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList);

    return(
        <div className="container">
            <button className="filter-btn" onClick={() => {
                const newResList = listOfRes.filter(
                    (res) => res.info.avgRating > 4.3);
                    console.log(newResList);
                setListOfRes(newResList);
            }}>Filter</button>
            <div className="search-container">
                <input type="text" placeholder="Search Restauraunts" required></input>
                <button type="search" onClick={() => {
                    const input = document.querySelector('input');
                    const findRes = listOfRes.filter(
                        (res) => res.info.name == input.value
                    );
                    setListOfRes(findRes);
                }}><img alt="search-icon" src={search}/></button>
            </div>
            <h2 className="heading">Restauraunts in Your Area</h2>
            <div className="card-container">
            {listOfRes.map((restaurant) => ( <Card key = {restaurant.info.id} resData = {restaurant} />))}
            </div>
        </div>
    )
}

export default Body;