import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './component/pages/Home';

import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from './component/pages/NotFound';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route   component={NotFound} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
