import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
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
import CarteCoordinateur from './views/coordination-territoriale/CarteCoordinateur';
import Formation from './views/formation';
import FormulaireIndisponible from './views/FormullaireIndisponible';

const RedirectCarto = () => {
  const { permanence } = useParams();
  return <Navigate to={`/${permanence}/details`} replace />;
};


const GestionHash = () => {
  const location = useLocation();
  const allowedAncres = ['#ancre-themes', '#ancre-statistiques'];
  if (allowedAncres.includes(location.hash)) {
    return <Accueil />;
  }
  return <Navigate to="/" />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/accueil" element={<GestionHash />}/>
          <Route path="/kit-communication" element={<KitCommunication />}/>
          <Route path="/mentions-legales" element={<MentionsLegales />}/>
          <Route path="/accessibilite" element={<Accessibilite />}/>
          <Route path="/aide-candidat" element={<AideCandidat />}/>
          <Route path="/aide-structure" element={<AideStructure />}/>
          <Route path="/documentheque" element={<Documentheque />}/>
          <Route path="/coordination-territoriale" element={<CoordinationTerritoriale />}/>
          <Route path="/coordination-territoriale/:coordinateur" element={<CarteCoordinateur />}/>
          <Route path="/coordination-territoriale/:coordinateur/details" element={<CarteCoordinateur />}/>
          <Route path="/carte" element={<Carte />}/>
          <Route path="/regions" element={<Carte />}/>
          <Route path="/regions/:region" element={<Carte />}/>
          <Route path="/regions/:region/:departement" element={<Carte />}/>
          <Route path="/:permanence/details" element={<Carte />}/>
          <Route path="/carte/:permanence/details" element={<RedirectCarto />}/>
          <Route exact path="/:permanence" element={<Carte />}/>
          <Route path="/formation" element={<Formation/>}/>
          <Route path="/candidature/formulaire-indisponible" element={<FormulaireIndisponible/>}/>
          <Route index element={<Accueil />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
