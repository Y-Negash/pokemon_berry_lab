const Berry = ({berry, favouriteBerry}) => {
   
    const mappedFlavors = berry.flavors.map((flavor)=> {
        return <li>{flavor.flavor.name}</li>
    })

    const handleButtonClick = () => {
        favouriteBerry(berry);
    }

    return ( 
        <>
        <div className="berries">
            <h4>{berry.name.toUpperCase()}</h4>
            Flavours: <ul>
             {mappedFlavors}
            </ul>
            <p>Size: {berry.size}</p>
            <p>Natural Gift Power: {berry.natural_gift_power}</p>
            <button onClick={handleButtonClick}> Favourite Me! ⭐️ </button>
            </div>
        </>
     );
}
 
export default Berry;