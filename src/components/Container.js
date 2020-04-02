import React, { useReducer } from 'react'
import TextField from './TextField';
// import ButtonComponent from './ButtonComponent'
import Link from './Link'
import { Container, FormGroup, Label } from 'reactstrap';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';


let schema = yup.object().shape({
  Email: yup.string().email('Please enter a valid email')
 .required('Please enter an email'),
  password: yup.string().required(),
})

const loginDataSetter = {
    loginData: "SET_VALUES"
};

const setLoginData = param => {
    return {
        type: loginDataSetter.loginData,
        payload: param
    };
};

const reducer = (state, action) => {
    switch (action.type) {
      case loginDataSetter.loginData:
        return { ...state, ...action.payload };
      default:
        return state;
    }
}

const ContainerComponent = (props) => {
  const initialState = {
    email: null,
    password: null
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const textChangeHandler = e => {
      const { value, name } = e.target;
      let formData = { ...state };
      formData[name] = value;
      dispatch(setLoginData(formData));

  };

  const onSubmit = e => {
     e.preventDefault();
      schema.isValid(state).then(isValid => {
          alert("Valid Input: " + isValid +
          "\nEntered Email: " + state.email +
           "\nEntered Password: " + state.password );
      });
      alert(state.email)

};

  return (
    <Container>
      <br />
      <br />
      <div class="col-md-4 offset-md-4">
        <div class="text-center p-5 shadow-lg">

          <Label class="h4 mb-4">LOGIN</Label>
          <hr />
          <br />
          <form onSubmit={onSubmit}>
            <FormGroup>
              <TextField
              type ='text'
              placeholder="Username"
              name = 'email'
              class="form-control"
              onChange={textChangeHandler}
              value= {state.email} required/>
            </FormGroup>
            <FormGroup>
              <TextField
              type= 'password'
              placeholder = 'Password'
              name = 'password'
              onChange={textChangeHandler}
              value= {state.password} />
            </FormGroup>
            <FormGroup>
              <button
              class="btn btn-info btn-block my-4"
              type="submit">Submit</button>
            </FormGroup>
            <FormGroup>
              <Label>New User..</Label>
              <Link
              class="text-decoration-none"
              value='CreateAccount' href='#'/>
            </FormGroup>
          </form>
       </div>
     </div>
   </Container>
 );
}
export default ContainerComponent;