import React, { useEffect, useRef } from 'react';

const SITE_KEY = '84e24b30-44ca-488c-9260-ec80c290c166';

export default function Captcha() {
  const captchaRef = useRef(null);

  useEffect(() => {
    if (window.hcaptcha) {
      window.hcaptcha.render(captchaRef.current, {
        sitekey: SITE_KEY,
      });
    }
  }, []);

  return (
    <div ref={captchaRef}></div>
  );
}
