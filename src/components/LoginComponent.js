import React from 'react';
import Link from './Link'
import { Label, Spinner, Form, FormGroup, Button, Input, FormFeedback } from 'reactstrap';

const LoginComponent = (props) => {
  const {
    handleSubmit,
    handleChange,
    emailError,
    passwordError,
    loading
  } = props;

  if(loading){
    return (
      <Spinner animation="border" role="status">
        Loading...
      </Spinner>
    );
  }

  return(
  <div className="col-md-4 offset-md-4">
  <br/><br/>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          invalid={emailError !== ''}
        />
        <FormFeedback>{emailError}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
          invalid={passwordError !== ''}
        />
        <FormFeedback>{passwordError}</FormFeedback>
      </FormGroup>
      <Button color="success">Submit</Button>
      <br/><br/>
      <Label for="new account">New User?</Label>
      <Link value="    Create new Account"  href="#" />
    </Form>
    </div>
  )
};

export default LoginComponent;