import React, { Component } from 'react';
export default class ComponentWithMount extends Component {
    constructor(porps) {
        super(porps);
        console.log('Constructor ComponentWithMount');
        this.state = { mensajeWitMount: 'mensaje with mount' };
    }

    // Este el primer metodo realmente que se ejecuta en el ciclo de vida de un componente, y nos sirve
    // Para preparas la inicializacion del component y tener listo el codigo
    // Y se realiza antes del RENDER

    componentWillMount() {
        console.log('Funcion ComponentWithMount');
        //this.state = { mensajeWitMount: 'mensaje with mount modificado' };
    }
    // Se ejecuta la primera vez que se monta el componente, pero se va a estar ejecutando
    // cada vez que se ectualice el componente y es el unico obligatorio
    render() {
        console.log('render ComponentWithMount')
        return (
            <div>
                <h4>Ciclo de vida montaje: ComponentWithMount</h4>
                {this.state.mensajeWitMount}
            </div>
        );
    }
}