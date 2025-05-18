'use client';

import dynamic from 'next/dynamic';
import 'react-cookie-manager/dist/style.css';

const CookieManager = dynamic(
  () => import('react-cookie-manager').then(mod => mod.CookieManager),
  { ssr: false }
);

const CookieManagerClient = () => {
  return (
    <CookieManager
      translations={{
        title: "Cookie Preferences",
        message: "We use cookies to improve your experience.",
      }}
      displayType="modal"
      theme="light"
      onSave={(cookies) => {
        console.log('Saved cookie preferences:', cookies);
      }}
    />
  );
};

export default CookieManagerClient;