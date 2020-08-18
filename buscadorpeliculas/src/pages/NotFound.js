import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>404</h1>
                <h1 className='subtitle'>No existe la pagina</h1>
                <Link to='/' className='button is-info'>Volver</Link>
            </div>            
        );
    }
}