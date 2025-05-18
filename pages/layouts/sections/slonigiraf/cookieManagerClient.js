'use client';

import dynamic from 'next/dynamic';
import 'react-cookie-manager/dist/style.css';

const CookieManager = dynamic(
  () => import('react-cookie-manager').then(mod => mod.CookieManager),
  { ssr: false }
);

const loadAnalytics = () => {
  // Google Analytics
  const gaScript = document.createElement('script');
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q8JF7VWSM1';
  gaScript.async = true;
  document.head.appendChild(gaScript);

  gaScript.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-Q8JF7VWSM1');
  };

  // Yandex Metrika
  const ymScript = document.createElement('script');
  ymScript.innerHTML = `
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(101962692, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true
    });
  `;
  document.head.appendChild(ymScript);
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