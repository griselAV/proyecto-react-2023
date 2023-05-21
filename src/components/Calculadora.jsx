import { Component } from "react"

class Calculadora extends Component{
    //primer paso del ciclo de vida
    constructor(props){
        super(props)

        this.state={
            numero1:0,
            numero2:1
        }
        this.setNumber1=this.setNumber1.bind(this)
    }

    setNumber1(e){
        if(e.target.name==="numero 1"){
            this.setState({
                ...this.state,
    
                numero1:e.target.value
            })
        }
        else{
            this.setState({
                ...this.state,
    
                numero2:e.target.value
            })
        }
        
        
    }

    // segundo paso del ciclo de vida
    render(){
        return(
            <>
                <h2>{this.props.nombre}</h2>
                {/*<form>
                    
                    <input 
                    type="number" 
                    value={this.state.numero1} 
                    name="numero 1"
                    onChange={()=>{
                        this.setState({
                            numero1:this.value,
                        })
                    }}
                    />
                    <input 
                    type="number" 
                    value={this.state.numero2} 
                    name="numero 2"
                    onChange={()=>{
                        this.setState({
                            numero2:this.value,
                        })
                    }}
                    />
                    <input type="submit" value="Sumar" name="sumar"/>
                </form>
                <span>Resultado: </span>*/}
                <form>
                    <input 
                    type="number" 
                    value={this.state.numero1} 
                    name="numero 1"
                    onChange={this.setNumber1}
                    />
                    <input 
                    type="number" 
                    value={this.state.numero2} 
                    name="numero 2"
                    onChange={this.setNumber1}
                    />
                    <input type="submit" value="Sumar" name="sumar"/>
                </form>
                <span>Resultado: {Number(this.state.numero1) +  Number(this.state.numero2)} </span>
            </>
        )
    }
    //tercer paso del ciclo de vida 

    componentDidMount(){}
    //cuarto paso del ciclo de vida
    componentWillUnmount(){}
}
export default Calculadora