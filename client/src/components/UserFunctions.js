import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      id:newUser.id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      rol: newUser.rol
    })
    .then(response => {
      console.log(newUser);
      console.log('Se Registró (userFunctions)');
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      id: user.id,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const TodasReg = region => {
  return axios
    .get('regiones/TodasReg', {
      id: 14
    })
    .then(response => {
      console.log('en Userfunctions')
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const recepcion = newRecep => {
  return axios
    .post('users/recepcion', {
      id:newRecep.id


    })
    .then(response => {
      console.log(newRecep);
      console.log('Se Registró (userFunctions)');
    })
}
