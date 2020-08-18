import React, {Component} from 'react';

class ComponenteA extends Component {
    render(){
        return <button>Iniciar Session</button>
    }
}

class ComponenteB extends Component {
    render(){
        return (
            <div>
                <p>Bienvenido</p>
                <button>Salir</button>
            </div>
        )
    }
}

export default class ConcionalSeccion extends Component {
    constructor(){
        super();
        this.state = {mostrarA: false}
    }
    render() {
        const numeros = [1,1,3,5,7];
        const objeto = [
            {nombre:'maikol',edad:30},
            {nombre:'Matias',edad:6}
        ];
        return (
             <div>
                 <h4>Condicional renderizado</h4>
                 <h2>Iterando arreglos</h2>
                 {this.state.mostrarA ? <ComponenteA /> : <ComponenteB />}
                 <h2>Iterando arreglos</h2>
                 {numeros.map((numero,index)=>{
                     return <p key={index}>Soy el numero {numero}</p>
                 })}
                <h2>Iterando arreglo de objetos</h2>
                 {objeto.map((obj,index)=>{
                     return <p key={index}>{obj.nombre} - {obj.edad}</p>
                 })}
             </div>
        );
    }
}