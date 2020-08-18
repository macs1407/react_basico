import React, { Component } from 'react';
import Title from '../components/Title';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

export default class Home extends Component {
    state = { results: [], usedSearch: false }; // Contendra los resultados de la busqueda

    // Setea los resultados que se obtuvieron en SearchForm
    _handleResults = results => {
        this.setState({ results, usedSearch: true });
    }

    _renderResult = () => {
        return this.state.results.length === 0
            ? <p>Sin resutados</p>
            : <MoviesList movies={this.state.results} />
    }

    render() {
        return (
            <div>
                <Title>Buscador de peliculas</Title>
                <div className="searchForm">
                    {/* Se le envia la variable onResults que va a contener los resutados de la busqueda*/}
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.usedSearch
                    ? this._renderResult()
                    : <small>Use el formulario para buscar una pelicula</small>
                }
            </div>
        )
    }
}