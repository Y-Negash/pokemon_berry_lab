import Berry from "./Berry";

const BerryList = ({berries, favouriteBerries, title}) => {
    
    const mappedBerries = berries.map((berry)=>{
        return <Berry key={berry.id} berry={berry} favouriteBerry={favouriteBerries}/>
    })
    
    return (  
        <>
            <section>
                <h3>{title}</h3>
                {mappedBerries}
            </section>
        </>        
    );
}
 
export default BerryList;