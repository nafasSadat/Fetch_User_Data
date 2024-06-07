import './App.css';
import { Navbar } from './component/navigationbar/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

function App() {

  return (
    <div className="App">
     <Router>
      <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        </Routes>
      
     </Router>
    </div>
  );
}

export default App;
