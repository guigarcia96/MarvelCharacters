import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import Characters from '../pages/Characters';
import CharactersDescription from '../pages/CharacterDescription';
import Page404 from '../pages/Page404';

function Routes() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/characters' component={Characters} />
        <Route path='/characters-description' component={CharactersDescription} />
        <Route path='*' component={Page404} />
      </Switch>

    </BrowserRouter>
  )
}
export default Routes;