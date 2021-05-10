import React from "react";
import { Container } from "react-bootstrap";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Animation from "../components/Animation";
import Movie from "../components/Movie";

function Video() {
  let { url } = useRouteMatch();

  return (
    <Container>
      <h1>Video</h1>
      <ButtonGroup aria-label="video">
        <Button as={Link} to={url + "/movie"} variant="secondary">
          Movie
        </Button>
        <Button as={Link} to={url + "/animation"} variant="secondary">
          Animation
        </Button>
      </ButtonGroup>

      <Switch>
        <Route path={url + "/movie"}>
          <Movie />
        </Route>
        <Route path={url + "/animation"}>
          <Animation />
        </Route>
      </Switch>
    </Container>
  );
}

export default Video;
