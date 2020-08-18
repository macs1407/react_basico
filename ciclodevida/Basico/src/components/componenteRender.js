import React, { Component } from 'react';

const HelloRender = (porps)=><h1>Hola Render</h1>

export default class Render extends Component{
    constructor(props){
        super(props);
        this.state = {mensajeRender : 'Mensaje inicial Render'};
    }

    componentWillMount(){
        console.log('componentWillMount Render');
    }

    render(){
        console.log('componentWillMount Render');
        // Agrupar varios elementos sin un fragment se hace con return []
        return [
            <h1 key="uno">Primer Elemento</h1>,
            <HelloRender key="dos"/>,
            <HelloRender key="tres"/>,
            <h3 key="tres">tercer Elemento</h3>
        ];
    }
}