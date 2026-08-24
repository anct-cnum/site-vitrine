import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@gouvfr/dsfr/dist/core/core.module.min.js';
import '@gouvfr/dsfr/dist/component/navigation/navigation.module.min.js';
import '@gouvfr/dsfr/dist/component/modal/modal.module.min.js';
import '@gouvfr/dsfr/dist/component/header/header.module.min.js';
import './assets/sass/main.scss';
import '@gouvfr/dsfr/dist/core/core.min.css';
import '@gouvfr/dsfr/dist/component/button/button.min.css';

const ACCUEIL_URL = 'https://conseiller-numerique.gouv.fr';

const RedirectionAccueil = () => {
  useEffect(() => {
    window.location.replace(ACCUEIL_URL);
  }, []);
  return null;
};

function App() {
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
            <Route path="/candidature-conseiller" element={<PageCandidatureConseiller />}/>
            <Route path="/candidature-poste-conseiller" element={<PageCandidatureStructure />}/>
            <Route path="/candidature-poste-coordinateur" element={<PageCandidatureCoordinateur />}/>
            <Route path="/candidature-validee-conseiller" element={<PageCandidatureValideeConseiller />}/>
            <Route path="/candidature-validee-structure" element={<PageCandidatureValideeStructure />}/>
            <Route path="/candidature-confirmer-conseiller/:token" element={<PageConfirmationEmailCandidatureConseiller />}/>
            <Route path="/candidature-confirmer-structure/:token" element={<PageConfirmationEmailCandidatureStructure />}/>
            <Route path="*" element={<RedirectionAccueil />}/>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
