import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import auth from "../auth/auth";

function Auth(props) {
  let history = useHistory();

  const onLogin = (e) => {
    e.preventDefault();
    auth.login(() => {
      history.push("/welcome");
      console.log("====================================");
      console.log(auth.isAuth());
      console.log("====================================");
    });
  };

  return (
    <Container>
      <Form className="w-50 m-auto">
        <h3 className="my-3">Login</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Auth;
