import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { history } from './helpers';
import './assets/js';
import './assets/sass/main.scss';
import Footer from './components/Footer';
import Accueil from './views/accueil';
import KitCommunication from './views/kit-communication';
import MentionsLegales from './views/MentionsLegales';
import Accessibilite from './views/Accessibilite';
import AideCandidat from './views/aide-candidat';
import AideStructure from './views/aide-structure';
import CoordinationTerritoriale from './views/coordination-territoriale';
import Documentheque from './views/documentheque';
import Carte from './views/Carte';

const RedirectCarto = () => {
  const { permanence } = useParams();
  return <Navigate to={`/${permanence}/details`} replace />;
};

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes>
          <Route path="/accueil" element={<Navigate to="/" />}/>
          <Route path="/kit-communication" element={<KitCommunication />}/>
          <Route path="/mentions-legales" element={<MentionsLegales />}/>
          <Route path="/accessibilite" element={<Accessibilite />}/>
          <Route path="/aide-candidat" element={<AideCandidat />}/>
          <Route path="/aide-structure" element={<AideStructure />}/>
          <Route path="/documentheque" element={<Documentheque />}/>
          <Route path="/coordination-territoriale" element={<CoordinationTerritoriale />}/>
          <Route path="/carte" element={<Carte />}/>
          <Route path="/regions" element={<Carte />}/>
          <Route path="/regions/:region" element={<Carte />}/>
          <Route path="/regions/:region/:departement" element={<Carte />}/>
          <Route path="/:permanence/details" element={<Carte />}/>
          <Route path="/carte/:permanence/details" element={<RedirectCarto />}/>
          <Route exact path="/:permanence" element={<Carte />}/>
          <Route index element={<Accueil />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
