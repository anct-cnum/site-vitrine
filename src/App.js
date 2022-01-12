import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/js';
import './assets/sass/main.scss';
import Footer from './components/Footer';
import Accueil from './views/Accueil';
import KitCommunication from './views/KitCommunication';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/kit-communication" element={<KitCommunication />}/>
          <Route index element={<Accueil />}/>
          <Route path="*" element={<Accueil />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
