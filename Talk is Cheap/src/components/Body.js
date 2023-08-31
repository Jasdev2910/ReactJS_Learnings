import Card from "./Card";
import search from "../assets/search.png";
import { resList } from "../utils/mockData";

const Body = () => {
    return(
        <div className="container">
            <div className="search-container">
                <input type="text" placeholder="Search Restauraunts"></input>
                <button type="search"><img alt="search-icon" src={search}/></button>
            </div>
            <h2 className="heading">Restauraunts in Your Area</h2>
            <div className="card-container">
            {resList.map((restaurant) => ( <Card key = {restaurant.info.id} resData = {restaurant} />))}
            </div>
        </div>
    )
}

export default Body;