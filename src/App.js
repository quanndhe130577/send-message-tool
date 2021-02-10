
import './App.css';
import LoginForm from './components/LoginForm';
import Privacy from './components/Privacy/Privacy'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Menu from './components/Menu'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path='/login'>
          <LoginForm />
        </Route>
        <Route exact path='/privacy' component={Privacy}>
        </Route>
        <Route exact path='/dashboard' component={Dashboard} />

        <Redirect to='/login'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
