import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import About from './component/pages/About';
import Contact from './component/pages/Contact';
function App() {
  return (
    <div className="App">

     <Home />
     <About />
     <Contact />


    </div>
  );
}

export default App;
