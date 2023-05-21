import { useRef } from "react"
import "./Curso.css"

function Curso({titulo,subtitulo,imagen}){
    //euseRef nos permite crear una referencia hacia un elemnto del dom
    const miReferencia=useRef()
    function desactivarImagen(){
        miReferencia.current.classList.add("desactivada")
    }
    return(
        <div>
            <img ref={miReferencia} src={imagen }alt={titulo} />
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
            <button onClick={desactivarImagen}>Desactivar</button>
        </div>
    )
}
export default Curso
