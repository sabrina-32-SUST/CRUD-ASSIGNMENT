import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/navbar';
function App() {
  return (
    <div className="App">

<Navbar />
     <Home />
     <About />
     <Contact />


    </div>
  );
}

export default App;
