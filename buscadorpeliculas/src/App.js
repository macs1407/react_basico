import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Details from './pages/Details';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* Declarar las rutas se Switch y para cada ruta se Route */}
        <Switch>
          <Route 
            exact
            path='/'
            component={Home}
          />
          <Route 
            path='/detail/:id'
            component={Details}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
