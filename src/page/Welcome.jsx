import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import auth from "../auth/auth";

function Welcome() {
  let history = useHistory();

  return (
    <Container>
      <h1>Welcome</h1>
      <Button
        onClick={() => {
          auth.logout(() => {
            history.push("/auth");
          });
        }}
      >
        Logout
      </Button>
    </Container>
  );
}

export default Welcome;
