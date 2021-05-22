// Компоненты
import { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';
import Container from './components/Container';
import Loader from './components/Loader';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

const App = ({ onGetCurrentUser }) => {
  useEffect(() => {
    onGetCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <PublicRoute
            path={routes.register}
            restricted
            component={RegisterPage}
            redirectTo={routes.contacts}
          />
          <PublicRoute
            path={routes.login}
            restricted
            component={LoginPage}
            redirectTo={routes.contacts}
          />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsPage}
            redirectTo={routes.login}
          />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Container>
  );
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
