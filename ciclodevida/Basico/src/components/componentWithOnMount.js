import React, { Component } from 'react';

export default class EjemploDeComponenteDidMount extends Component{
    constructor(porps){
        super(porps);
        this.state = {scroll:0};
        console.log('----------------------------------------------------------------');
        console.log('constructor EjemploDeComponenteDidMount');
    }

    componentWillMount(){
        console.log('componentWillMount EjemploDeComponenteDidMount');
    }

    componentDidMount(){
        console.log('componentDidMount EjemploDeComponenteDidMount');
        // Si actualizamos el state se volvera a ejecutar el metodo render, por esto es aqui en este
        // metodo donde se deben suscribir los eventos
        document.addEventListener('scroll', ()=>{
            this.setState({scroll:window.scrollY});
        });
    }

    render(){
        console.log('render EjemploDeComponenteDidMount');
        return(
            <div>
                <h4>Ciclo de montaje: componenteDidMount</h4>
                <p>El scroll es {this.state.scroll}</p>
                <p>Este componente nos muestra como podemos usar el componenteDidMount</p>
                <p>En agosto de 1972 se crea la Corporación Colombiana de Ahorro y Vivienda 
                    Coldeahorro, que abrió sus puertas al público el 15 de noviembre del mismo año, 
                    con una oficina principal en Bogotá y tres oficinas de atención al público en las
                    principales ciudades del país, una en Medellín, otra en Cali y la última en 
                    Barranquilla</p>
            </div>
        );
    }
}