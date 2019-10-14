import React, { Component } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import { login } from './UserFunctions'
import Imagen from '../nuevo.jpg'
import Avatar from '@material-ui/core/Avatar';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      id:'',
      email: '',
      password: '',
      foto:'',
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
    const user = {
      id: this.state.id,
      password: this.state.password
    }

    login(user).then(res => {
      console.log(res);
      if (res) {       //evaluar el rol para distribuir
          console.log('1 de login');
          //this.setState({foto:user.providerData[0].photoURL });
        //  <Avatar src={this.state.foto}/>
            <Avatar src={Imagen}/>
        this.props.history.push(`/profile`)
      //  this.props.history.push(`/profile2`)
      //  this.props.history.push(`/profile3`)
    }else { console.log("usuario no existe");} //lanzar alerta de que le user no existe
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5 mx-auto">

            <form noValidate onSubmit={this.onSubmit}>

            <div>
  <img src={Imagen}  className="portada" alt="Imagen" />
            </div>

              <div className="form-group">
                <label htmlFor="text">Código</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  placeholder="Ingrese su codigo"
                  value={this.state.id}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div >
                <div className="form-group auto center">
              <button
                type="submit"
                className="btn btn-lg btn-danger centrado"

              >
                Entrar
              </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
