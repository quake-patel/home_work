import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/home';
import SignUp from './component/SignUp'
import Login from './component/Login';
import Article from './component/article';

function App() {
  return (
    <Router>
      <div className="form-page">
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div >
    </Router>
  )
}

export default App;
