import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Swal from 'sweetalert2';


export default class Clase11 extends Component{
    state = {name: "", error: false, edad: ""};
    
    handleChange1 = (event) => {
        this.setState({
            name : event.target.value, 
            error: false,
        });
        console.log("Se ha cambiado el nombre")


    }
    handleChange2 = (event) => {
        this.setState({
            error: false,
            edad: event.target.value,
        });
        console.log("Se ha cambiado la edad")


    }

    handleSubmit = (event) => {
        event.preventDefault();

        if((this.state.name === "") || (this.state.edad === "") || (this.state.edad < 0 )){
            this.setState({error:true});
        }
        else{
            Swal.fire("Hola " + this.state.name + " tu nueva edad es: " + (this.state.edad - 10));
            this.setState({name: '', edad: '', error: false});
        }
    }
    
    
    render(){
        return(
            
            <form onSubmit = {this.handleSubmit}>
               
                <label> Nombre </label>
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange1}
                />
                <label> Edad </label>
                <input 
                    type="text"
                    value={this.state.edad}
                    onChange={this.handleChange2}
                />
                {this.state.error && <span>Error</span>}
                <button type="submit">Submit</button>

            </form>


        );        
    }
}
