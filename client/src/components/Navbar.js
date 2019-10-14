import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/login`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item font-weight-bold">
          <Link to="/login" className="nav-link">
            Acceso
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Registro
          </Link>
        </li>

      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Información
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/recepcion" className="nav-link">
            Recepción De Muestras
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Salir
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse "
          id="navbarsExample10"
        >

          {localStorage.usertoken ? userLink : loginRegLink}
        </div>


  <button className="btn  btn-secondary" type="button">
      Mensajes <span className="badge">4</span>
  </button>

      </nav>
    )
  }
}

export default withRouter(Landing)
