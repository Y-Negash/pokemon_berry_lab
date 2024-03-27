import { useEffect, useState } from "react";
import BerryList from "../components/BerryList";
import BerrySearchForm from "../components/BerrySearchForm";
import "./berry.css";


const BerryContainer = () => {
   
    const [berries, setBerries] = useState([]);
    const [favouriteBerries, setFavouriteBerries] = useState([]);

    const loadBerryData = async () => {
        const initialResponse = await fetch("https://pokeapi.co/api/v2/berry/?offset=0&limit=64")
        const initialData = await initialResponse.json()
        const urlObjects = initialData.results
        const berryRequests = urlObjects.map(async (urlObject)=> {
            const response = await fetch(urlObject.url);
            return await response.json();
        })
        const results = await Promise.all(berryRequests)
        setBerries(results)
    }

    useEffect( () => {
        loadBerryData();
    }, []);

    const favouriteABerry = (berry) => {
        const updatedBerries = [...berries];
        const updatedFavouriteBerries = [...favouriteBerries];

        const chosenBerry = updatedBerries.indexOf(berry);

        if (chosenBerry === -1) {
            return
        }

        updatedBerries.splice(chosenBerry, 1);
        updatedFavouriteBerries.push(berry);

        setBerries(updatedBerries);
        setFavouriteBerries(updatedFavouriteBerries);
    }


    return ( 
        <>
        <div className="search"><BerrySearchForm /></div>
            <div className="berryList">
            <BerryList berries={berries} favouriteBerries={favouriteABerry} title={"Berry Collection:"} />
            <BerryList berries={favouriteBerries} favouriteBerries={favouriteABerry} title={"Favourite Berries:"}/>
            </div>
        </>
     );
}
 
export default BerryContainer;
