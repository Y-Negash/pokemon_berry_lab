import { useState } from "react";

const BerrySearchForm = () => {

    const [name, setName] = useState("");

    return (  
        <>
            <form> 
            <input 
                    type="text" 
                    placeholder="Enter Berry name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
            />
            <input type="Submit" value="Search" />
            </form>
        </>
    );
}
 
export default BerrySearchForm;