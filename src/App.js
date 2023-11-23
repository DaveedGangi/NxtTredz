import {Switch, Route} from 'react-router-dom'

import NotFound from './components/NotFound'

import Home from './components/Home'

import LoginFormData from './components/LoginForm'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginFormData} />
    <Route component={NotFound} />
  </Switch>
)

export default App
