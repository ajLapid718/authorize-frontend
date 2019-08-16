import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllBooksContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/books" component={AllBooksContainer} />
    </Switch>
  )
}

export default RoutesView;