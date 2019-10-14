import React, { Component } from 'react'
import { recepcion } from './UserFunctions'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import Imagen from '../nuevo.jpg'

class Recepcion extends Component {
  constructor() {
    super()

    this.state = {
      id: '',
      fecha: new Date(),
      procedencia: '',
      tipo: '',
      ctrlCalidad: '',
      ampliarAmbiental: '',
      confirmarCepa: '',
      temp: '',
      observaciones: '',
      analisisSolicitado: '',
      motivo: '',
      prioridad: '',
      claveExa1:''
        }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const newRecep = {
      id: this.state.id,
      fecha: this.state.fecha,
      procedencia: this.state.procedencia,
      tipo: this.state.tipo,
      ctrlCalidad: this.state.ctrlCalidad,
      ampliarAmbiental: this.state.ampliarAmbiental,
      confirmarCepa: this.state.confirmarCepa,
      temp: this.state.temp,
      observaciones: this.state.observaciones,
      analisisSolicitado: this.state.analisisSolicitado,
      motivo: this.state.motivo,
      prioridad: this.state.prioridad,
      claveExa1:this.state.claveExa1
    }

    recepcion(newRecep).then(res => {
      console.log('recepction Code '+newRecep);
      this.props.history.push(`/login`)
    })
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      fecha: new Date()
    });
  }



  render() {
    return (
      <div className="container">
            <form noValidate onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-md-6 mt-4 mx-auto">
              <h3 className="font-weight-bold centrado">Recepcion de Muestras</h3>
          </div>
      </div>

  <div className="row">
      <div className="col-md-6 mt-6 mx-auto">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" id="basic-addon1">Muestra No.</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="id"
              placeholder=""
              value={this.state.id}
              onChange={this.onChange}
            />
        </div>
      </div>
      <div className="col-md-6 mt-6 mx-auto">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" id="basic-addon1">Fecha</span>
            </div>
            <input
              type="text"
              className="form-control "
              disabled
              name="fecha"
              placeholder=""
              value={this.state.fecha.toLocaleString()}
              onChange={this.onChange}
            />
        </div>
      </div>
  </div>

  <div className="row">
      <div className="col-md-12 mt-6 mx-auto">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" id="basic-addon1">Procedencia</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="procedencia"
              placeholder=""
              value={this.state.procedencia}
              onChange={this.onChange}
            />
        </div>
      </div>
  </div>

  <div className="row">
      <div className="col-md-6 mt-6 mx-auto">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" id="basic-addon1">
            Tipo Muestra</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="tipo"
              placeholder=""
              value={this.state.tipo}
              onChange={this.onChange}
            />
        </div>
      </div>

      <div className="col-md-6 mt-6 mx-auto ">
      <div className="form-group">
      <div className="form-check">
      <div className="row">
      <div className="col-md-2">
      <input
      type="checkbox"
      defaultChecked
      data-toggle="toggle"
      data-on="Si"
      data-off="No"
      data-onstyle="outline-success"
      data-offstyle="outline-secondary"
      name="ctrlCalidad"
      id="ctrlCalidad"
      data-size="small"
      value={this.state.ctrlCalidad}
      onChange={this.onChange}
      />
      </div>
      <div className="col-md-9">

      <h5 className="form-check-label font-weight-bold">  Control de Calidad </h5>

      </div>
      </div>

      </div>
    </div>
      </div>
  </div>

      <div className="row">
        <div className="col-md-6 mt-6 mx-auto">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" id="basic-addon1">
            Ampliar tipo de muestra (ambiental)</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="ampliarAmbiental"
              placeholder=""
              value={this.state.ampliarAmbiental}
              onChange={this.onChange}
            />
        </div>
        </div>
        <div className="col-md-6 mt-6 mx-auto">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" id="basic-addon1">
            Confirmar(Cepa Microbiologia Médica)</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="confirmarCepa"
              placeholder=""
              value={this.state.confirmarCepa}
              onChange={this.onChange}
            />
        </div>
        </div>
     </div>

      <div className="row">
          <div className="col-md-3 mt-6 mx-auto">
 <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text font-weight-bold">Temperatura</span>
  </div>
  <input
    type="text"
    className="form-control"
    name="temp"
    placeholder=""
    value={this.state.temp}
    onChange={this.onChange} />
  <div className="input-group-append">
    <span className="input-group-text">°C</span>
  </div>
 </div>
          </div>
          <div className="col-md-9 mt-6 mx-auto">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold" id="basic-addon1">
            observaciones</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="observaciones"
              placeholder=""
              value={this.state.observaciones}
              onChange={this.onChange}
            />
        </div>
          </div>
      </div>

      <div className="row">
<div className="col-md-12 mt-6 mx-auto">
      <div className="card text-center border-danger">
        <h6 className="card-header font-weight-bold">CONTROL AMBIENTAL Y ANALISIS SOLICITADO</h6>
        <div className="card-body border-danger">
  <div className="row">
          <div className="col-md-3 mt-6 mx-auto">
          <div className="form-group">
          <div className="form-check">
            <input
            type="checkbox"
            className="form-check-input  toggle"
            name="ctrlCalidad"
            id="ctrlCalidad"
            value={this.state.ctrlCalidad}
            onChange={this.onChange}
            />
            <label className="form-check-label" htmlFor="dropdownCheck">
            MICROBIOLOGICO
            </label>
          </div>
          </div>
          </div>
          <div className="col-md-3 mt-6 mx-auto">
          <div className="form-group">
          <div className="form-check">
            <input
            type="checkbox"
            className="form-check-input  toggle"
            name="ctrlCalidad"
            id="ctrlCalidad"
            value={this.state.ctrlCalidad}
            onChange={this.onChange}
            />
            <label className="form-check-label" htmlFor="dropdownCheck">
            FISICO QUIMICO
            </label>
          </div>
          </div>
          </div>
          <div className="col-md-3 mt-6 mx-auto">
          <div className="form-group">
          <div className="form-check">
            <input
            type="checkbox"
            className="form-check-input  toggle"
            name="ctrlCalidad"
            id="ctrlCalidad"
            value={this.state.ctrlCalidad}
            onChange={this.onChange}
            />
            <label className="form-check-label" htmlFor="dropdownCheck">
            TOXICOLOGICO
            </label>
          </div>
          </div>
          </div>
          <div className="col-md-3 mt-6 mx-auto">
          <div className="form-group">
          <div className="form-check">
            <input
            type="checkbox"
            className="form-check-input  toggle"
            name="ctrlCalidad"
            id="ctrlCalidad"
            value={this.state.ctrlCalidad}
            onChange={this.onChange}
            />
            <label className="form-check-label" htmlFor="dropdownCheck">
            METALES PESADOS
            </label>
          </div>
          </div>
          </div>
</div>
        </div>

      <div className="card-footer bg-transparent border-danger">
        <div className="row">
           <h6 className="font-weight-bold centrado">MOTIVO</h6>
          <div className="col-md-3 mt-6 mx-auto left ">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-outline-warning">
        <input
        type="radio"
        className="form-control"
        name="motivo"
        value={this.state.motivo}
        onChange={this.onChange}
        id="option3"
        autoComplete="off"
        /> Programa
        </label>
        <label className="btn btn-outline-warning">
        <input
        type="radio"
        className="form-control"
        name="motivo"
        value={this.state.motivo}
        onChange={this.onChange}
        id="option3"
        autoComplete="off"
        /> FASSC
        </label>
        <label className="btn btn-outline-warning">
        <input
        type="radio"
        className="form-control"
        name="motivo"
        value={this.state.motivo}
        onChange={this.onChange}
        id="option3"
        autoComplete="off"
        />
        Queja
        </label>
        <label className="btn  btn-outline-warning">
        <input
        type="radio"
        className="form-control"
        name="motivo"
        value={this.state.motivo}
        onChange={this.onChange}
        id="option3"
        autoComplete="off"
        /> Brote
        </label>
              </div>
          </div>
        </div>
      </div>


      </div>
  </div>

    </div>

    <div className="row">

<div className="col-md-12 mt-5 mx-auto">
<div className="card border-danger text-center">
<div className="card-header font-weight-bold">
BIOLOGIA MOLECULAR CONTROL MICROBIOLOGICO ANALISIS SOLICITADO
</div>
<div className="card-body ">
<div className="row">
    <div className="col-md-2">
    </div>
    <div className="col-md-4 font-weight-bold">
    PRIORIDAD
    </div>
    <div className="col-md-2">
    <input type="checkbox" 
    defaultChecked data-toggle="toggle" data-on="NORMAL"
    data-off="URGENTE" data-onstyle="success" data-offstyle="danger"/>
    </div>
  </div>
</div>
</div>
</div>

  </div>

    <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                claveExa1</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="claveExa1"
                  placeholder="claveExa1"
                  value={this.state.claveExa1}
                  onChange={this.onChange}
                />
            </div>
          </div>
          <div className="col-md-6 mt-5 mx-auto">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                claveExa1</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="claveExa1"
                  placeholder="claveExa1"
                  value={this.state.claveExa1}
                  onChange={this.onChange}
                />
            </div>
          </div>
      </div>




      <button type="submit"  className="btn btn-lg btn-danger  centrado">
                Guardar
      </button>
            </form>
      </div>


    )
  }
}

export default Recepcion
