import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import MainContent from './components/main-content';
import Bio from './pages/bio';
import Work from './pages/work';
import Footer from './components/footer';
import Contact from './pages/contact';
import Messages from './pages/messages';
import Login from './pages/login';


//used routing to get to each page and pulled in MainContent component to surround and set the Main section.
//imported navbar and footer elements to be present on each page throughout site. 
function App() {

  return (
    <Router>
      <div className="body">
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MainContent>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
