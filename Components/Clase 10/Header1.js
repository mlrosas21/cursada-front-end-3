import React from 'react'
export default class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {mounted: "No montado aún"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({mounted: "MONTADO"})
      }, 1000)
    }
    render() {
      return (
        <h1>Soy un componente y estoy: {this.state.mounted}</h1>
      );
    }
  }