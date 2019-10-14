import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class TodasReg extends Component {
  constructor() {
    super()
    this.state = {
      id:'',
      nombre: '',
      subregion: '',
      estado:'',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
      console.log('en Todasreg '+decoded);
    this.setState({
      id: decoded.id,
      nombre: decoded.nombre,
      subregion: decoded.subregion,
      estado:decoded.estado
    })
  }

  render() {
    return (
      <div className="container">

  <div className="row">

      <div className="panel panel-default">
        <div className="panel-heading">TODAS REGIONES</div>
        <table className="table col-md-6 mx-auto">
          <tbody>
          <tr>
            <td>ID</td>
              <td>NOMBRE</td>
              <td>SUBREGION</td>
                  <td>ESTADO</td>

          </tr>
            <tr>
              <td>{this.state.id}</td>
              <td>{this.state.nombre}</td>
                <td>{this.state.subregion}</td>
                  <td>{this.state.estado}</td>

            </tr>
          </tbody>
        </table>
      </div>
      </div>
  </div>
    )
  }
}

export default TodasReg
