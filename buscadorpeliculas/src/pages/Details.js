import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const API_KEY = 'eff4f12a';
export default class Details extends Component {
    state={movie:{}};
    static porpTypes = { // math nos trae un objeto con toso los datos de la url
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    _fetchMovie({id}){
        console.log(id);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(resp=>resp.json())
        .then(movie=>{
            console.log(movie);
            this.setState({movie:movie});
        });
    }

    componentDidMount(){
        console.log(this.props);
        const {id} = this.props.match.params; // Estraer el id de los parametros que llegan por url
        this._fetchMovie({id});
    }

    _volver(){
        window.history.back();
    }

    render(){
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie;
        return(
            <div>
                <Link to='/' className='button is-info'>Volver</Link>                
                <h1>{Title}</h1>
                <img src={Poster} />
                <p>{Actors}</p>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        );
    }
}