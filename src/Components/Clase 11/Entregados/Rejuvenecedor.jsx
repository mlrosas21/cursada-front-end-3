import React, { Component } from "react";
import Swal from 'sweetalert2'


const Rejuvenecedor = () => <MyLittleForm />;

class MyLittleForm extends Component {
    state = { name: "", age: 0, errorName1: false, errorName2: false, errorAge: false };

    handleChange = (event) => {
        this.setState({
            name: event.target.value
            });
            console.log('Has cambiado el nombre');
    }

    handleChange2 = (event) => {
        this.setState({
            age: event.target.value
            });
            console.log('Has cambiado la edad');
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(typeof(this.state.name)==="string"){
            console.log(typeof(this.state.name))
            if(this.state.name.length>1){
                if(this.state.age>0){
                    this.setState({
                        name: "",
                        age: 0,
                        errorName1: false,
                        errorName2: false,
                        errorAge: false
                        
                    })
                    Swal.fire("Hola " + this.state.name + " tu edad ahora es " + (this.state.age-10));
                }else{
                    this.setState({
                        errorName1: false,
                        errorName2: false,
                        errorAge: true
                    })
                }
            }else{
                this.setState({
                    errorName1: false,
                    errorName2: true,
                    errorAge: false
                })
            }
        }else{
            this.setState({
                errorName1: true,
                errorName2: false,
                errorAge: false
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                 {this.state.errorName1 && <span>El nombre tiene que ser un string</span>}
                 {this.state.errorName2 && <span>El nombre tiene que tener por lo menos un caracter</span>}
                <input
                    type="number"
                    value={this.state.age}
                    onChange={this.handleChange2}
                />
                {this.state.errorAge && <span>La edad tiene que ser un número positivo mayor a cero</span>}
                <button type="submit">Submit!</button>
            </form>
            );
        }
}

export default Rejuvenecedor;