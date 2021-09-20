import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <Switch>
          <Route exact path="/" component = {Home} />
         
          <Route exact path="/" component = {About} />
          <Route exact path="/" component = {Contact} />

          </Switch>

      </div>
    </Router>
  );
}

export default App;
