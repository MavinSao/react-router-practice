import React from "react";
import { Container } from "react-bootstrap";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import AccountChild from "../components/AccountChild";
function Account() {
  let { url } = useRouteMatch();
  return (
    <Container>
      <h1>Account</h1>
      <ul>
        <li>
          <Link to={url + "/netflix"}>Netflix</Link>
        </li>
        <li>
          <Link to={url + "/zillow-group"}>Zillow Group</Link>
        </li>
        <li>
          <Link to={url + "/yahoo"}>Yahoo</Link>
        </li>
        <li>
          <Link to={url + "/modus-create"}>Modus Create</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${url}/:id`} children={<AccountChild />} />
      </Switch>
    </Container>
  );
}

export default Account;
