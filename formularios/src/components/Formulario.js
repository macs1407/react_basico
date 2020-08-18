import React from 'react';
import { Component, Fragment } from "react";

export default class Formulario extends Component {
    constructor(){
        super();
        this.state = {
            inputUserName:'',
            inputTwitter:'@',
            inputTerm:true
        }
    }

    
    handleSubmit = (e) => {
        e.preventDefault();
        // A esto se le llama componentes descontrolados, se le dice ya que no hay ningun control en 
        // el componente sobre los campos y para recuperarlos se debe consultar al arbol de elementos
        //const userName = this.inputUserName.value;
        //const twitter = this.inputTwitter.value;
        console.log(this.state);
    }

    handleChange = e=>{
        this.setState({inputTerm:e.target.value});
    }

    // Componentes controlados

    render() {
        return (
            <Fragment>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="userName">Nombre:</label>
                        <input
                            id="userName"
                            name="userName"
                            onChange={e=>{this.setState({inputUserName: e.target.value})}}
                            placeholder="Introduce tu nombre"
                            ref={inputElement => this.inputUserName = inputElement} 
                            value={this.state.inputUserName}
                            />
                    </p>
                    <p>
                        <label>Twitter:</label>
                        <input
                            id="twitter"
                            name="twitter"
                            placeholder="Introduce tu twitter"
                            onChange={e=>{this.setState({inputTwitter: e.target.value})}}
                            ref={inputElement => this.inputTwitter = inputElement} 
                            value={this.state.inputTwitter}/>
                    </p>
                    <p>
                        <label>
                            <input
                                checked={this.state.inputTerm} 
                                type="checkBox" 
                                onChange={this.handleChange} />
                        </label>
                    </p>
                    <button>Enviar</button>
                </form>
            </Fragment>
        )
    }
}