import React, { useState, useCallback} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/Users';
import NewPlace from './places/NewPlace';
import UserPlaces from './places/UserPlaces';
import UpdatePlace from './places/UpdatePlace';
import MainNavigation from './shared/MainNavigation';
import Auth from './user/Auth';
import { AuthContext } from './context/auth-context';
// Contextilla voidaan välittää dataa ilman propseja
// Käytetään tässä tapauksessa Loginiin "kuuntelijana"


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

// jos loggattu sisään niin näytetään nämä reitit

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );

// jos ei logattu sisäään niin nämä reitit React.Fragment korvattu Switchillä,
// toimii jokseenkin samallalailla.

  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
