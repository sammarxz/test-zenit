import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Home, AddTask } from './pages';

const App = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Home />}
              />
              <Route
                exact
                path='/add'
                render={() => <AddTask />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>  
  )
  
}

export default App