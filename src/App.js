import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Actividades from './Actividades.js';

class App extends Component {
  constructor(props){
    super(props);
    this.actividades=[]
  }

  render() {
    return (
      <div className="border m-3">
        <div className="row my-3">
          <div className="col-lg-12 text-center h1">Proyecto | Aplicación web de Gestión de Proyectos</div>
        </div>
        <div className="row border-top mx-0" style={{backgroundColor: 'tomato'}}>
          <div className="col-lg-4 border-right border-dark text-center h5 m-0">Actividad</div>
          <div className="col-lg-1 border-right border-dark text-center h5 m-0">Esperado</div>
          <div className="col-lg-1 border-right border-dark text-center h5 m-0">Avance</div>
          <div className="col-lg-6 text-center h5 m-0">Progreso</div>
        </div>
        {<Actividades cantidad={12} />}        
      </div>
    );
  }
}
export default App;
