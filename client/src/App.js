import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
//import Imagen from './nuevo.jpg'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Profile2 from './components/Profile2'
import TodasReg from './components/TodasReg'
import Recepcion from './components/Recepcion'
import Barra from './components/Barra'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Login} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
              <Route exact path="/Landing" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile2" component={Profile2} />
            <Route exact path="/TodasReg" component={TodasReg} />
            <Route exact path="/recepcion" component={Recepcion} />
          </div>

        </div>
      </Router>

    )
  }
}

export default App
