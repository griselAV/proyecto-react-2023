import { useEffect, useState } from "react";
import axios from "axios";
import CuadriculaCriptoMoneda from "./criptomoneda/CuadriculaCriptoMoneda";

function App() {
  const [criptos,setCriptos]=useState()
  const URL=process.env.REACT_APP_BASE_URL
  useEffect(()=>{
    //primera forma de hacer las API en variable de entorno
    //fetch("https://api.coincap.io/v2/assets")
    //.then((resp)=>resp.json())
    //.then((data)=>{
    //  setCriptos(data.data)
    //})
    //segunda forma de hacer las API con axios con variables de entorno
    axios.get(`${URL}assets`)
    .then((data)=>{
      setCriptos(data.data.data)
    })
    .catch(()=>{
      console.error("La peticion fallo")
    })
  },[])
  if(!criptos) return <span>Cargando...</span>
  return (
    < >
    <h2>Lista de cripto monedas</h2>
      <CuadriculaCriptoMoneda cripto={criptos}/>
    </>
  );
}
export default App;