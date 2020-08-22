import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

import { Home } from './home/home'
import { Chiste } from './chiste/chiste'
import { Pokemon } from './pokemon/pokemon'

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar is-dark">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link className='title has-text-light' to='/'>Hooks</Link>
            </div>
          </div>
          <div className="navbar-menu is-active">
            <div className="navbar-start">
              <div className="navbar-item">
                <Link to='/chistes'>chistes</Link>
              </div>
              <div className="navbar-item">
                <Link to='/pokemon'>pokemon</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="section">
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/chistes'>
              <Chiste />
            </Route>

            <Route path='/pokemon'>
              <Pokemon />
            </Route>

          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
