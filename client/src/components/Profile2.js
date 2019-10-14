import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      id:'',
      first_name: '',
      last_name: '',
      email: '',
      rol:'',
      created:'',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      id: decoded.id,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      rol:decoded.rol,
      created:decoded.created
    })
  }

  render() {
    return (
      <div className="container">

  <div className="row">

      <div className="panel panel-default">
        <div className="panel-heading">DATOS PERFIL 2</div>
        <table className="table col-md-6 mx-auto">
          <tbody>
          <tr>
            <td>ID</td>
              <td>NOMBRE</td>
              <td>APELLIDOS</td>
                  <td>CORREO</td>
                    <td>ROL</td>
                      <td>FECHA</td>
          </tr>
            <tr>
              <td>{this.state.id}</td>
              <td>{this.state.first_name}</td>
                <td>{this.state.last_name}</td>
                  <td>{this.state.email}</td>
                    <td>{this.state.rol}</td>
                      <td>{this.state.created}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
</div>
    )
  }
}

export default Profile
