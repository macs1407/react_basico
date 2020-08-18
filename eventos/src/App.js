import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {mouseX:0,mouseY:0};
    //this.hanldeMouseMove = this.hanldeMouseMove.bind(this);
  }
  
  handleClick(e){
    e.preventDefault();
    console.log(e);
    alert('Pulsado')
  }

  // Las arrow function siempre obtienen el contexto donde se declaran
  hanldeMouseMove=(e)=>{
    const {clienteX,clienteY} = e;
    this.setState({mouseX:clienteX, mouseY:clienteY})
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
        </header>
        <button onClick={this.handleClick}>Enviar</button>
        <div style={{border:'1px solid black', marginTop:10, padding:10}}
          onMouseMove={this.hanldeMouseMove}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>
    );
  }
} 

export default App;
