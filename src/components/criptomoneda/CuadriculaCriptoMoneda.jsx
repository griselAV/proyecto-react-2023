import ItemCriptoMoneda from "./ItemCriptoMoneda"
import "./Cripto.css"

function CuadriculaCriptoMoneda({cripto}){
    return(
        < div className="grid">
            <ItemCriptoMoneda className="color"
            cripto={cripto}
            />
        </div>
    )
}
export default CuadriculaCriptoMoneda