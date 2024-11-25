import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SITE_KEY = '0x4AAAAAAA0pjEgohPDZsyqu';

export default function Captcha({ setWidgetId }) {
  const captchaRef = useRef(null);

  useEffect(() => {
    if (window.turnstile) {
      window.turnstile.remove();
      const widgetId = window.turnstile.render(captchaRef.current, {
        sitekey: SITE_KEY,
      });
      setWidgetId(widgetId);
    }
  }, []);

  return (
    <div ref={captchaRef}></div>
  );
}

Captcha.propTypes = {
  setWidgetId: PropTypes.func,
};
