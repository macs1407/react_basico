import React, { Component } from 'react';
const API_KEY = 'eff4f12a';

export default class SearchForm extends Component {
    state = {inputMovie:''};
    _handleChange = e=>{
        this.setState({inputMovie:e.target.value});
    }
    _handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.inputMovie);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
        .then(resp=>resp.json())
        .then(datos=>{
            let {Search = []} = datos;
            this.props.onResults(Search);
        });
    }
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text"
                            onChange={this._handleChange} 
                            placeholder="Encuentra una pelicula" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Buscar
                        </button>
                    </div>
                </div>
            </form>
        )
    }

}