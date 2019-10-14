import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';
import Login from './Login';
import Typography from '@material-ui/core/Typography';

class AppNav extends Component{
  render(){
    return(
      <div>
        <AppBar position='static'>
          <Toolbar>
          <Typography variant="h1"   className={this.props.classes.grow}/>
            Laboratio Estatal
          </Toolbar>

        </AppBar>
      </div>
    );
  }
}

export default  withStyles({
    grow:{flexGrow:1, textAlign:'center'}
})(AppNav);
