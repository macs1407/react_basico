import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }

    render(){
        // Extraer contenido
        const {id, poster, title, year} = this.props;
        return(
            <Link to={`/detail/${id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                    <img alt={title} src={poster} width="200" height="300"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">        
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}