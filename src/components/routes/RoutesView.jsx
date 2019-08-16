import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Signup, AllBooksContainer } from '../containers';

const RoutesView = (props) => {
  const { isLoggedIn } = props;

  return (
    <Switch>
      {/* Routes placed within this section are available to all visitors */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      {isLoggedIn && (
        <Switch>
          {/* Routes placed within this section are only available after
          logging in */}
          <Route path="/books" component={AllBooksContainer} />
        </Switch>
      )}

      {/* Displays our Login component as a fallback */}
      <Route component={Login} />
    </Switch>
  );
}

export default RoutesView;