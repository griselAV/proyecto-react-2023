function ItemCriptoMoneda({cripto}){
    return(
        <>
        {cripto.map(({id, name, priceUsd})=>(
            <div  className="color" key={id}>
                <span>Nombre: {name}</span> <br />
                <span>Precio: {priceUsd}</span> 
            </div>
        ))}
        </>
    )
}
export default ItemCriptoMoneda
