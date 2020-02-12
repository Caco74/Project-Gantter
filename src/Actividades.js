import React, { Component } from 'react'

export default class Actividades extends Component {

  actividades = (cantidad) => {
    let actividades = []
    for (var i = 1; i <= cantidad; i++) {
      const avance = (Math.random()*100).toFixed(0)+'%';
      const esperado = (Math.random()*100).toFixed(0)+'%';
      const avanceReal = (Math.random()*100).toFixed(0)+'%';
      actividades.push(
        <div className="row border-bottom mx-0" style={{backgroundColor: '#EEe333'}}>
          <div className="col-lg-4 border-right border-dark text-left h5 m-0">{'Actividad ' +i}</div>
          <div className="col-lg-1 border-right border-dark text-center h5 m-0">{esperado}</div>
          <div className="col-lg-1 border-right border-dark text-center h5 m-0">{avance}</div>
          <div className="col-lg-6 text-center h5 m-0">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: avanceReal}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      )
    }
    return (
      actividades
    )
  }

  render() {
    return (
      <div>
        {this.actividades(this.props.cantidad)}
      </div>
    )
  }
}
