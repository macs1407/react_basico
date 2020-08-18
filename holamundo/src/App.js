import React, { Component } from 'react';
import './App.css';

/* function Hello(props){
  return <h2>Bienvenido {props.mensaje}</h2>
} */

// En clases para acceder a las propiedades se hace con THIS
class Hello extends Component {
  render() {
    return <h2>Bienvenido {this.props.mensaje}</h2>
  }
}
class Text extends Component {
  render() {
    const {titulo,echo} = this.props;
    const ternario = this.props.comprueba ? 'Cierto' : 'Falso';
    return (
      <div>
        {titulo}
        <p>{this.props.text}</p>
        <p>{this.props.numero}</p>
        <p>{ternario}</p>
        <p>{this.props.arreglo.join(',')}</p>
        <p>{this.props.objeto.nombre}</p>
    <p>{echo}</p>
      </div>
    )
  }
}

// Definir propiedades por defecto
Text.defaultProps = {
  echo:'maikol cucunuba'
}

// Usando states
class Contador extends Component {
  constructor(){
    super();
    this.state = {contador: 1};
    setInterval(()=>{
      this.setState({contador:this.state.contador+1});
    },2000);
  }
  render(){
    return <ContadorNumero numero={this.state.contador}/>
  }
}

class ContadorNumero extends Component {
  render(){
  return <span>{this.props.numero}</span>
  }
}

function App() {
  return (
    <div className="App">
      <Hello mensaje="Hola mundo" />
      <p>TRABAJANDO CON PROPIEDADES 1</p>
      <Text
        arreglo={[1, 2, 3]}
        objeto={{ nombre: "maikol", edad: 25 }}
        text="Texto"
        numero={2}
        comprueba={true} 
        titulo={<h2>Trabajando con react</h2>}/>
        <h1>USANDO STATES</h1>
      <Contador />
      <ContadorNumero />
    </div>
  );
}

export default App;
