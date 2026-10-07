import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SITE_KEY = '0x4AAAAAAA0pjEgohPDZsyqu';

export default function Captcha({ setWidgetId }) {
  const captchaRef = useRef(null);

  useEffect(() => {
    if (window.turnstile) {
      window.turnstile.remove();
      // L'iframe générée par Turnstile est dans un shadow root fermé : son titre ne peut pas être
      // modifié depuis la page. On force la langue pour que ce titre soit en français, quelle que
      // soit la langue du navigateur, et on fournit le contexte via le groupe qui l'englobe.
      const widgetId = window.turnstile.render(captchaRef.current, {
        sitekey: SITE_KEY,
        language: 'fr',
      });
      setWidgetId(widgetId);
    }
  }, []);

  return (
    <div role="group" aria-labelledby="captcha-titre" aria-describedby="captcha-description">
      <p className="fr-mb-1v fr-text--bold" id="captcha-titre">Vérification de sécurité</p>
      <p className="fr-text--sm fr-hint-text fr-mb-1w" id="captcha-description">
        Cette vérification automatique, fournie par Cloudflare, permet de s’assurer que la candidature est envoyée par une personne.
      </p>
      <div ref={captchaRef}></div>
    </div>
  );
}

Captcha.propTypes = {
  setWidgetId: PropTypes.func,
};
