
import React from 'react';
import { ReactDOM } from 'react-dom/client';
import"/public/assets/bootstrap/css/bootstrap.min.css"
import"/public/assets/bootstrap/js/bootstrap.bundle.min.js"
import "./App.css"


function Bou({celsius}){
    if (celsius >=100) {
      return   <div className='alert alert-success'>Water boils</div>
    }else{
       return  <div className='alert alert-danger'>Water is not boiling</div>
    }
}

function tofahrenheit(celsius){
    return (celsius * 1.8) + 32
}
function tocelsius(fahrenheit) {
    return (fahrenheit -32 )* 0.55
}
const libelles={
    c:"Celsius",
    f:"Fahrenheit"
}

class Temperature extends React.Component{
    constructor(props) {
        super(props)   
    this.handlechange=this.handlechange.bind(this);
    }

    handlechange(e){
    this.props.OnTempChange(e.target.value);
    }

     render(){
        const {temperature}= this.props
        const name= this.props    
        const libelle= libelles[this.props.type];
        
        return <div>
            <label htmlFor="name"> {libelle} temperature </label>
            <input type="text" className='form-control col-lg-3' value={temperature} onChange={this.handlechange} />
        </div>
    }
}




class Conversion_temperature extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            temperature:"",type:"c"
    }
    this.handle_celsieus_temp_change= this.handle_celsieus_temp_change.bind(this);
    this.handle_fahrenheit_temp_change= this.handle_fahrenheit_temp_change.bind(this);
    }

    handle_celsieus_temp_change(temperature){
        this.setState({
           type:"c",
           temperature
        });
    }
    handle_fahrenheit_temp_change(temperature){
        this.setState({
           type:"f",
           temperature
        });
    }

    render(){
        const {temperature,type}= this.state;
        const celsius = type === "c" ? temperature : tocelsius(temperature);
        const fahrenheit = type ==="f" ? temperature : tofahrenheit(celsius)
        return <div id='main'>
            <div className='content'>
                <Temperature type="c" temperature={celsius} OnTempChange={this.handle_celsieus_temp_change}/>
                <Temperature type="f" temperature={fahrenheit} OnTempChange={this.handle_fahrenheit_temp_change}/>
                <Bou  celsius={parseFloat(temperature)}/>
            </div>
            
        </div>
    }


}
export default Conversion_temperature;