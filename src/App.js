import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './assets/js';
import './assets/sass/main.scss';
import Footer from './components/Footer';
import Accueil from './views/accueil';
import KitCommunication from './views/kit-communication';
import MentionsLegales from './views/MentionsLegales';
import Accessibilite from './views/Accessibilite';
import AideCandidat from './views/aide-candidat';
import AideStructure from './views/aide-structure';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/kit-communication" element={<KitCommunication />}/>
          <Route path="/mentions-legales" element={<MentionsLegales />}/>
          <Route path="/accessibilite" element={<Accessibilite />}/>
          <Route path="/aide-candidat" element={<AideCandidat />}/>
          <Route path="/aide-structure" element={<AideStructure />}/>
          <Route index element={<Accueil />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
