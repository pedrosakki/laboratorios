import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      rol: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const newUser = {
      id: this.state.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      rol: this.state.rol
    }

    register(newUser).then(res => {
      console.log('register Code '+newUser);
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
            <form noValidate onSubmit={this.onSubmit}>
      <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
              <h1 className="font-weight-normal centrado">Registro de Empleados</h1>
          </div>
      </div>

      <div className="row">
          <div className="col-md-4 mt-5 mx-auto">
              <div className="form-group">
                <label htmlFor="name">Codigo</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  placeholder="Ingrese su codigo"
                  value={this.state.id}
                  onChange={this.onChange}
                />
              </div>
      </div>
        <div className="col-md-4 mt-5 mx-auto">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Ingrese su nombre"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
        </div>
        <div className="col-md-4 mt-5 mx-auto">
          <div className="form-group">
            <label htmlFor="name">Apellidos</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Ingrese sus apellidos"
              value={this.state.last_name}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-md-4 mt-5 mx-auto">
              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Ingrese su correo"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
          </div>
          <div className="col-md-4 mt-5 mx-auto">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
          </div>
          <div className="col-md-4 mt-5 mx-auto">
<div className="form-group">
<label htmlFor="sel1">Rol</label>
<select className="form-control"  name="rol" onChange={this.onChange}>
<option defaultValue>Seleccione un Rol</option>
<option value="1">Capturista</option>
<option value="2">Soporte</option>
<option value="3">Desarrollador</option>
<option value="4">Administrador</option>
</select>
</div>
          </div>
      </div>



      <button type="submit"  className="btn btn-lg btn-danger centrado"   >
                Guardar
      </button>
            </form>
      </div>


    )
  }
}

export default Register
