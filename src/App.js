import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './Topbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './Main.css';
import Hinnasto from './Hinnasto';

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className="main-content">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/hinnasto" element={<Hinnasto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;