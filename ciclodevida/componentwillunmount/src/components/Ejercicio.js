import React, { Component } from 'react';

class ComponenteADesmontar extends Component{
    state = {windowWidth:0};

    _updateStateWithWindowWith=()=>{
        this.setState({windowWidth:document.body.clientWidth});
    }

    componentDidMount(){
        this._updateStateWithWindowWith();
        window.addEventListener('resize',this._updateStateWithWindowWith)
    }

    // Eliminar posibles suscripciones
    componentWillUnmount(){
        console.log('ComponenteADesmontar');
        //window.removeEventListener('resize',this._updateStateWithWindowWith);
    }

    render(){
        return(
            <div>
                <p>Ancho de la ventana {this.state.windowWidth}</p>
            </div>
        )
    }
}

export default class ComponentWillUnMount extends Component{
    state = {mostrarComponente:true};

    // Un componente se utiliza cuando no se utiliza el metodo render
    render(){
        // Si la variable mostrarComponente es TRUE muestra el componente
        if(this.state.mostrarComponente){
            return(
                <div>
                    <h4>Cilo desmontaje: ComponentWillUnMount</h4>
                    <ComponenteADesmontar />
                    <button onClick={()=>{this.setState({mostrarComponente:false})}}>Desmontar</button>
                </div>
            );
        }
        return(
            <p>El componente se ha desmontado</p>
        )
    }
} 