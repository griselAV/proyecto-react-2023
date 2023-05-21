import {useEffect, useState } from "react"

function CalculadoraModerna ({nombre}){
    
    const [state,setState]=useState({
        numero1:0,
        numero2:0,
    })
    const [texto,setTexto]=useState("")

    //useEffect se ejecuta cuando el componente va a ser construido
    //El segundo parametro es un array opcional.
    //El array sera el listado de todos los estados que quiero controlar como
    //disparadores de la funcion que escribi en el useEffect
    //si no le paso array como 2do parametro. El useEffect vuelve a coorer siempre
    // que algun estado se actualice
    useEffect(()=>{
        console.log(new Date().getTime())
    }, [texto])

    function setNumber(e){
        if(e.target.name==="numero 1"){
            setState({
                ...state,
                numero1:e.target.value
            })
        }
        else{
            setState({
                ...state,
                numero2:e.target.value
            })
        } 
    }
    function setText(e){
        setTexto(e.target.value)
    }

    return(
        <>
            <h2>{nombre}</h2>
            
            <form>
                <input 
                type="number" 
                value={state.numero1} 
                name="numero 1"
                onChange={setNumber}
                />
                <input 
                type="number" 
                value={state.numero2} 
                name="numero 2"
                onChange={setNumber}
                />
                <input type="submit" value="Sumar" name="sumar"/>
            </form>
            <span>
                Resultado: {Number(state.numero1) +  Number(state.numero2)} 
            </span>
            <input type="text" onChange={setText} />
            <span>{texto}</span>
        </>
    )
}
export default CalculadoraModerna