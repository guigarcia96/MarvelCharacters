import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import Characters from '../pages/Characters';
import CharactersDescription from '../pages/CharacterDescription';


function Routes() {
  return(
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/characters' component={Characters} />
      <Route path='/characters-description' component={CharactersDescription} />
    
    </BrowserRouter>
  )
}
export default Routes;