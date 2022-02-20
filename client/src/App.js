import './App.css';
import React, {useState,useEffect} from 'react';

import {HomeView} from './screens/HomeView/HomeView';
import {LoginView} from './screens/LoginView/LoginView';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/app")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <LoginView/>
  );
}

export default App;
