import React, { Component } from 'react';
import './App.css';
import ComponentWithMount from './components/componentWithMount';
import Render from './components/componenteRender';
import EjemploDeComponenteDidMount from './components/componentWithOnMount';

class App extends Component {
  // La fase de vida de un componente empieza con el montaje "CONSTRUCTOR"
  constructor() {
    super();
    console.log('Contructor.....');
    // Inicializar el state y asignandole las variables que necesitamos en esta clase
    this.state = { mensaje: 'Mensaje de montaje' };
  }
 
 
  render() {
    console.log('render');
    return (
      <div className="App">
        <h2>Cliclo de vida: constructor</h2>        
        {this.state.mensaje}
        <h2>Cliclo de vida: ComponentWithMount</h2>
        <ComponentWithMount />
        <h2>Cliclo de vida: Render</h2>
        <Render />
        <h2>Cliclo de vida: ComponenteDidMount</h2>
        <EjemploDeComponenteDidMount />
      </div>
    );
  }
}

export default App;
