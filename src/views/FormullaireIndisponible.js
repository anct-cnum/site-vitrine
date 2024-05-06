import React from "react";

function FormulaireIndisponible() {
  return (
    <main role="main" id="content">
      <div className="fr-container">
        <div className="fr-my-7w fr-mt-md-12w fr-mb-md-10w fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-grid-row--center">
          <div className="fr-py-0 fr-col-12 fr-col-md-8">
            <h1>Formulaire en cours de maintenance</h1>
            <p className="fr-text--sm fr-mb-3w">Erreur 404</p>
            <div className="fr-text--lead">
              <p>
                Le formulaire de candidature est actuellement indisponible pour maintenance.
              </p>
              <p>
                Nous nous excusons pour cet inconvénient temporaire.
              </p>
              <p>
                Nous travaillons &agrave; le rendre à nouveau disponible au plus vite.
              </p>
              <p>
                Merci de votre compréhension. Pour toute assistance, veuillez nous
                contacter &agrave; <b>conseiller-numerique@anct.gouv.fr</b>
              </p>
            </div>
            <ul className="fr-btns-group fr-btns-group--inline-md">
              <li>
                <a className="fr-btn" href="/">
                  Page d&apos;accueil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FormulaireIndisponible;