import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMALS_IMAGES = {
    cat: 'https://goo.gl/PoQQXb',
    dolphi:'https://goo.gl/BbiKCd',
    panda:'https://goo.gl/oNbtoq'
}

class AnimalImage extends 
Component {
//PureComponent { // Se utiliza en Pure Component solo cuando los states y props son simples
    state = {src: ANIMALS_IMAGES[this.props.animal]};
    // Se ejecuta cuando le llegan al componente nuevas props o se han actualizado
    componentWillReceiveProps(nextProps){
        console.log('1. componentWillReceiveProps');
        console.log(nextProps);
        // Controlar que no se actualice el componente si la anterior prop es igual a la nueva porp
        if(this.props.animal !== nextProps.animal){
            console.log('Diferente');
            this.setState({src: ANIMALS_IMAGES[nextProps.animal]});
        }        
    }
    // Mejorar aun mas el performance para evitar renderizados innecesarios en RENDER
    shouldComponentUpdate(nextProps){
        console.log('2. shouldComponentUpdate');
        console.log('anterior: ',this.props.animal);
        console.log('nuevo: ',nextProps);
        // Hay que devolver un booleano, si este metodo no existe, se devuelve TRUE por defecto
        return this.props.animal !== nextProps.animal; // Retorna True cuando sean distintas
    }

    componentWillUpdate(nextProps, nextSate){
        console.log('3. componentWillUpdate: ',nextProps,nextSate);
    }

    render(){
        console.log('Render');
        return(
            <div>
                <p>Seleccionada {this.props.animal}</p>
                <img alt={this.props.animal} src={this.state.src} width='250'/>
            </div>
        );
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(Object.keys(ANIMALS_IMAGES))
}

export default class EjemploCicloDeActualizacion extends Component{
    state={animal:'panda'};
    _renderAnimalButton = animal=>{
        return(
            <button 
                //disabled={animal === this.state.animal}
                key={animal} 
                onClick={()=>this.setState({animal})}>
                {animal}
            </button>
        );
    }
    render(){
        return(
            <div>
                <h4>Ciclo de actualizacion, ejemplo de: ComponentWillReceiveProps y ShouldComponentUpdate</h4>
                {Object.keys(ANIMALS_IMAGES).map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>
            </div>
        )
    }
}