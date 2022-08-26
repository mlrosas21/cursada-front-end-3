import { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return(
            <>
                Esto es un {this.props.titulo}
            </>
        )
    }
}

export default ClassComponent