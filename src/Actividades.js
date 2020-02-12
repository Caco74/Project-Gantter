import React, { Component } from 'react'

export default class Actividades extends Component {

  actividades = (cantidad) => {
    let actividades = []
    for (var i = 1; i <= cantidad; i++) {
      const avance = (Math.random()*100).toFixed(0);
      const esperado = (Math.random()*100).toFixed(0);
      let estilo = '';
      let diferencia = avance - esperado;
      if (diferencia < -10) {
        estilo = 'bg-danger';
      } else if (diferencia >= -10 && diferencia < -5) {
        estilo = 'bg-warning';
      } else if (diferencia >= -5 && diferencia < 0) {
        estilo = 'bg-info'
      } else if (diferencia >= 0 && diferencia < 5) {
        estilo = ''
      } else if (diferencia >= 5) {
        estilo = 'bg-success'
      }
      actividades.push(
        <div className="row border-bottom mx-0" style={{backgroundColor: '#ee8572'}}>
          <div className="col-lg-4 border-right border-dark text-left h5 m-0">{'Actividad ' +i}</div>
          <div className="col-lg-1 border-right border-dark text-center h5 m-0">{esperado+' %'}</div>
          <div className="col-lg-1 border-right border-dark text-center h5 m-0">{avance+' %'}</div>
          <div className="col-lg-6 text-center h5 m-0">
            <div className="progress m-2">
              <div className={"progress-bar "+ estilo} role="progressbar" style={{width: avance+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{avance+' %'}</div>
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
