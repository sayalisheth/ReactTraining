import React from 'react';
import './App.css';
import * as yup from 'yup';
import TextField from './components/TextField'
import ButtonField from './components/ButtonField'
import Link from './components/Link'
import { useState } from 'react';

function App() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // let yup = require('yup');

  // name: yup.string().required();
  // password: yup.string().required();


  return (
    <div className="Card">
      <br/><br/>
      <TextField placeholder="username" type="text" onChange={setName} />
      <br/><br/>
      <TextField placeholder="password" type="password" onChange = {setPassword}/>
      <br/><br/>
      <ButtonField value="Login" color="success"/>
      <br/><br/>
      <Link value="Click here" href="#" />
    </div>
  );
}

export default App;
