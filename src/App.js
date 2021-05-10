import './App.css';
import NavMenu from './components/NavMenu';
import Home from './page/Home';
import { useState } from 'react'
import Video from './page/Video';
import Account from './page/Account';
import Auth from './page/Auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Detail from './page/Detail';
import Welcome from './page/Welcome';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {

  const [routes] = useState([
    {
      path: "/",
      exact: true,
      child: () => <Home />

    },
    {
      path: "/account",
      exact: false,
      child: () => <Account />

    },
    {
      path: "/auth",
      exact: false,
      child: () => <Auth />

    },
    {
      path: "/detail/:id",
      exact: false,
      child: () => <Detail />

    },
    {
      path: "/video",
      exact: false,
      child: () => <Video />
    },
    {
      path: "*",
      exact: false,
      child: () => <Container>404 Not Found</Container>
    }
  ])

  return (
    <div>
      <Router>
        <NavMenu />
        <Switch>
          <ProtectedRoute exact={false} path="/welcome" component={() => <Welcome />} />
          {routes.map((route, idx) =>
            <Route
              key={idx}
              path={route.path}
              children={route.child}
              exact={route.exact} />)
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
