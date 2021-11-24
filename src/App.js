import './App.css';
import Casino from './components2/Casino';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Form from './components2/Form';
import Lottery from './components2/Lottery';
import Loginform from './Login/Loginform';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route path="/casino" exact component={() => <Casino />} /> 
          <Route path="/" exact component={() => <Home />} /> 
          <Route path="/form" exact component={() => <Form />} />
          <Route path="/lottery" exact component={() => <Lottery />} />
          <Route path="/login" exact component={() => <Loginform />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
