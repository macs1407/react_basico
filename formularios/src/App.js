import React, { Component } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import PropTypes from 'prop-types';

class Articulo extends Component{
  // Validar que un atributo cuando se llame sea de tipo String
  static propTypes = {
    autor: PropTypes.string.isRequired
  }
  render(){
    const {titulo,autor,date} = this.props;
    return(
      <section>
        <h2>{titulo}</h2>
        {autor !== null ? <p>{autor}</p> : null}
        <p>{date}</p>
        <article>
          {this.props.children}
        </article>
      </section>
    );
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <Formulario />
        <h2>Children</h2>
        <Articulo 
          titulo='Trabajando con react'
          autor='maikol cucunuba'
          date={new Date().getFullYear()}>
            <p>Trabajando con hijos en react</p>
        </Articulo>

        <Articulo 
          titulo='Desarrollando con react'
          date={new Date().getFullYear()}>
            <p>Trabajando PropTypes</p>
        </Articulo>
      </div>
    );
  }
}

export default App;
