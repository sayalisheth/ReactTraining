
import React, { useReducer } from 'react';
import LoginComponent from './LoginComponent.js';
import LoginReducer from '../reducer/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as yup from 'yup'; // for everything

const LoginContainer = (props) => {
  const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    loading: false
  };

  const [state, dispatch] = useReducer(LoginReducer, initialState);

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handleChange = (e) => {
    dispatch({type: e.target.name, value: e.target.value})
  };

  const setLoader = (loading) =>{
    dispatch({type: 'loading', value: loading})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    let formData = new FormData(e.target);
    let data = { email: formData.get('email'), password: formData.get('password') }
    schema.validate(data, { abortEarly: false})
      .then(
        (value) => {
          try{
            fetch(
              "http://localhost:4000/sessions/login",
              {
                "headers":{
                  "accept": "application/json",
                  "content-type":"application/json"
                },
                "method":"POST",
                "body":JSON.stringify({login: value}), 
              },
                console.log(JSON.stringify({login: value}))
            ).then(response => {
              setLoader(false);
              return response.json();
            }).then(response => console.log(response));
          } catch(err) {
            console.log(err);
            setLoader(false);
          }
        }
      )
      .catch(
        (err) => {
          err.inner.forEach(element => {
            dispatch({type: `${element.path}Error`, value: element.message})
          });
          setLoader(false);
        }
      )
  };

  console.log(`loading: ${state.loading}`)
  return(
    <LoginComponent
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      emailError={state.emailError}
      passwordError={state.passwordError}
      loading={state.loading}
    />
  )
};

export default LoginContainer;