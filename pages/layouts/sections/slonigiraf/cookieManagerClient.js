'use client';

import dynamic from 'next/dynamic';
import 'react-cookie-manager/dist/style.css';

const CookieManager = dynamic(
  () => import('react-cookie-manager').then(mod => mod.CookieManager),
  { ssr: false }
);

const loadAnalytics = () => {
  // Prevent duplicate GA load
  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    const gaScript = document.createElement('script');
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q8JF7VWSM1';
    gaScript.async = true;
    document.head.appendChild(gaScript);
  }

  const inlineScript = document.createElement('script');
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Q8JF7VWSM1');
  `;
  document.head.appendChild(inlineScript);

  // Load Yandex Metrika
  const existingYM = Array.from(document.scripts).find(s => s.src === 'https://mc.yandex.ru/metrika/tag.js');
  if (existingYM) return;

  const ymScript = document.createElement('script');
  ymScript.type = 'text/javascript';
  ymScript.innerHTML = `
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) return;
      }
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(101962692, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });
  `;
  document.head.appendChild(ymScript);

  const noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <div><img src="https://mc.yandex.ru/watch/101962692" style="position:absolute; left:-9999px;" alt="" /></div>
  `;
  document.body.appendChild(noscript);
};

const CookieManagerClient = () => {
  return (
    <CookieManager
      translations={{
        title: "Cookie Preferences",
        message: "We use cookies to improve your experience.",
      }}
      displayType="modal"
      theme="light"
      privacyPolicyUrl="/privacy-policy"
      onSave={(cookies) => {
        console.log('Saved cookie preferences:', cookies);
      }}
      onAccept={(cookies) => {
        console.log('Accepted cookies:', cookies);
        loadAnalytics();
      }}
      onDecline={() => {
        console.log('Declined cookies');
      }}
      onManage={() => {
        console.log('User opened cookie manager');
      }}
    />
  );
};

export default CookieManagerClient;