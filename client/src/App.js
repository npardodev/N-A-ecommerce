import './App.css';

import React, {useEffect, useState} from 'react';

import { Chat } from './components/Chat/Chat.js';
import {HomeView} from './screens/HomeView/HomeView';
import {LoginView} from './screens/LoginView/LoginView';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/testApi")
      .then((res) => res.json())
      .then(console.log("jaja"))
      .then((data) => setData(data.message));
  }, []);

  return (
    <Chat/>
  );
}

export default App;
