import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);
    
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    console.log("Body rendered");

    useEffect(() => {
        fetchData();
    }, [] );

    const fetchData = async () => {
       const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9414686&lng=77.6178125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }; 

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
       return(
         <h1>Looks like you are offlilne</h1>
        );
     
        const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? (
         <Shimmer/> 
    ) : (
        <div className="body">
           <div className="filter flex">
            <div className="search m-4 p-4">
                <input
                type="text"
                data-testid="searchInput"
                className="border border-solid border-black"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
           <button 
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
             onClick={() => {
                //filter the restaurant cards and update ui

            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );

           setFilteredRestaurant(filteredRestaurant);

           }}
           >
            Search
           </button>
            </div>
           <div className="search m-4 p-4 flex items-center">

           <button 
           className="px-4 py-2 flex bg-slate-300 rounded-lg"
           onClick={ () => {
            const filteredList = listOfRestaurants.filter((res) => 
               res.info.avgRating > 4
            );

            setFilteredRestaurant(filteredList);
            }}
            >
            Top Rated Restaurants
           </button>         
           </div>

           <div className="search m-4 p-4 flex items-center">
            <label>UserName : </label>
            <input
             className="border border-black p-2"
             value={loggedInUser}
             onChange={(e) => setUserName(e.target.value)}
            />
          </div>

           </div>
           <div className="flex flex-wrap"> 
            {
                filteredRestaurant.map((restaurant) => (
                <Link 
                key={restaurant?.info.id}
                to={"/restaurants/" + restaurant?.info.id}
                >
                    {restaurant.info.promoted ? (
                        <RestaurantCardPromoted resData={restaurant?.info} />
                    ) : (
                        <RestaurantCard resData={restaurant?.info} />
                    )}
                </Link>
            ))}
            
           </div>
        </div>
    );
};


export default Body;
