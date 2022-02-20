import React from 'react';
import {useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
// Viejo el GRADIENTE remover
//import { GradientStyles } from './GradientStyles.js'
import { useAuth0} from '@auth0/auth0-react';
import axios from 'axios'

//const useStyle = makeStyles ((theme) => GradientStyles(theme));


export const LoginAuth0 = () => {
  
  const {
    loginWithPopup, 
    loginWithRedirect, 
    logout, 
    user, 
    isAuthenticated,
    getAccessTokenSilently
  } = useAuth0();

  const SERVER_PORT = 3000;
  const SERVER_URL = "127.0.0.1";

  const callApi = () =>{
    
    const options = { 
      method: `GET`,
      url: `https://${SERVER_URL}:${SERVER_PORT}/`,
    };

    axios(options)
    .then(response => {
      console.log(`Respesta API: ${response.data}`);
    })
    .catch(error => {
      console.log(`Eror en consulta API`);
    })
  }

  async function callProtectedApi() {
    try {

      const token = await getAccessTokenSilently();
      const options = { 
        method: `GET`,
        url: `https://${SERVER_URL}:${SERVER_PORT}/protected`,
        headers: { "authorization": `Bearer ${token}`},
      };

      axios(options)
        .then(response => {
          console.log(`Respuesta: ${response.data}`);

        })
        .catch(error => {
          console.log(error);
        });
      }
  
    catch(error) {
      console.log(`Error ${error.message}`);
    }

  }
  return (
    <div className="App">
      <h1>Authen</h1>
      <ul>
        <li>
          <button onClick={loginWithPopup}> Login whit Popup</button>
        </li>
        <li>
          <button onClick={loginWithRedirect}> Login whit Redirect</button>
        </li>
        <li>
          <button onClick={logout}> LogOut</button>
        </li>
      </ul>

      <ul>
        <li><button onClick={callApi}> Call API route </button></li>
        <li><button onClick={callProtectedApi}> Call Protected API</button></li>
      </ul>

      <h3>User is {isAuthenticated ? "Looged in" : "Not logged in"} </h3>
      { isAuthenticated && (
      <pre style={{textAlign: 'start'}}>
        {JSON.stringify(user, null, 2)}
      </pre>)}
    </div>
  );
}