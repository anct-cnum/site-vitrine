import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Accueil from './views/accueil';
import KitCommunication from './views/kit-communication';
import MentionsLegales from './views/MentionsLegales';
import Accessibilite from './views/Accessibilite';
import AideCandidat from './views/aide-candidat';
import AideStructure from './views/aide-structure';
import Documentheque from './views/documentheque';
import Formation from './views/formation';
import DonneesPersonnelles from './views/donnees-personnelles';

import '@gouvfr/dsfr/dist/core/core.module.min.js';
import '@gouvfr/dsfr/dist/component/navigation/navigation.module.min.js';
import '@gouvfr/dsfr/dist/component/modal/modal.module.min.js';
import '@gouvfr/dsfr/dist/component/header/header.module.min.js';
import './assets/sass/main.scss';
import '@gouvfr/dsfr/dist/core/core.min.css';

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
  const Carte = lazy(() => import('./views/Carte'));
  const PageCandidatureConseiller = lazy(() => import('./views/candidature-conseiller/PageCandidatureConseiller'));
  const PageCandidatureStructure = lazy(() => import('./views/candidature-structure/PageCandidatureStructure'));
  const PageCandidatureCoordinateur = lazy(() => import('./views/candidature-coordinateur/PageCandidatureCoordinateur'));
  const PageCandidatureValideeConseiller = lazy(() => import('./views/candidature-validee-conseiller/PageCandidatureValideeConseiller'));
  const PageCandidatureValideeStructure = lazy(() => import('./views/candidature-validee-structure/PageCandidatureValideeStructure'));
  const PageConfirmationEmailCandidatureConseiller =
  lazy(() => import('./views/confirmation-email-candidature-conseiller/PageConfirmationEmailCandidatureConseiller'));
  const PageConfirmationEmailCandidatureStructure =
  lazy(() => import('./views/confirmation-email-candidature-structure/PageConfirmationEmailCandidatureStructure'));

  return (
    <div className="App">
      <Suspense>
        <Router>
          <Routes>
            <Route path="/accueil" element={<GestionHash />}/>
            <Route path="/candidature-conseiller" element={<PageCandidatureConseiller />}/>
            <Route path="/candidature-poste-conseiller" element={<PageCandidatureStructure />}/>
            <Route path="/candidature-poste-coordinateur" element={<PageCandidatureCoordinateur />}/>
            <Route path="/candidature-validee-conseiller" element={<PageCandidatureValideeConseiller />}/>
            <Route path="/candidature-validee-structure" element={<PageCandidatureValideeStructure />}/>
            <Route path="/candidature-confirmer-conseiller/:token" element={<PageConfirmationEmailCandidatureConseiller />}/>
            <Route path="/candidature-confirmer-structure/:token" element={<PageConfirmationEmailCandidatureStructure />}/>
            <Route path="/kit-communication" element={<KitCommunication />}/>
            <Route path="/donnees-personnelles" element={<DonneesPersonnelles />}/>
            <Route path="/mentions-legales" element={<MentionsLegales />}/>
            <Route path="/accessibilite" element={<Accessibilite />}/>
            <Route path="/aide-candidat" element={<AideCandidat />}/>
            <Route path="/aide-structure" element={<AideStructure />}/>
            <Route path="/documentheque" element={<Documentheque />}/>
            <Route path="/carte" element={<Carte />}/>
            <Route path="/regions" element={<Carte />}/>
            <Route path="/regions/:region" element={<Carte />}/>
            <Route path="/regions/:region/:departement" element={<Carte />}/>
            <Route path="/:permanence/details" element={<Carte />}/>
            <Route path="/carte/:permanence/details" element={<RedirectCarto />}/>
            <Route exact path="/:permanence" element={<Carte />}/>
            <Route path="/formation" element={<Formation/>}/>
            <Route index element={<Accueil />}/>
            <Route path="*" element={<Navigate to="/" />}/>
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
