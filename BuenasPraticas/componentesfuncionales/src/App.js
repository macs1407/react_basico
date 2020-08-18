import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

/*
* A las funciones se le llaman componentes funcionales es un codigo mas limpio, pero no tenemos
* acceso a los metodos del ciclo de vida de cada componente
*/
function Articulo(props){
  return(
    <section>
      <h2>{props.titulo}</h2>
      <p><em>Escrito por {props.author}</em></p>
      <article>
        {props.children}
      </article>
    </section>
  )
}

// Utilizar PropTypes para controlar las propiedades que se le pasan a un articulo
Articulo.propTypes = {
  titulo: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

const Button = ({borderColor, label})=>(
  <button style={{borderColor, display:'block'}}>
    {label}
  </button>
)

function App() {
  return (
    <div className="App">
      <Articulo 
        titulo='Componente Funcionales' 
        author='Maikol Arley Cucunuba Salazar'>
          Ejemplo de componentes funcionales vrs Clases
      </Articulo>
      <Button borderColor='red' label='comentar'/>
    </div>
  );
}

export default App;
