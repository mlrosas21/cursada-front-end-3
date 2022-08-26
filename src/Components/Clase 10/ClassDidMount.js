import React, { Component } from 'react'

export default class ClassDidMount extends Component {
    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            misProps: null
        }
        
        this.incrementar = this.incrementar.bind(this);
    }
    incrementar() {
        this.setState({contador: this.state.contador + 1});
    }
    
   componentDidMount(){
        this.setState({misProps: this.props})
        console.log('El componente está montado')
    }

    componentDidUpdate(){
        
        console.log('Componente actualizado')
    }

    componentWillUnmount(){
        console.log('el componente se desmontó')
    }
 


  render() {
    return (
        <div>
            <h1>{this.state.contador}</h1>
            <button onClick={this.incrementar}>Incrementar</button>
            <h1>{this.state.message === true ? 'Incremenaste el contador' : null}</h1>
        </div>
    )
  }
}
