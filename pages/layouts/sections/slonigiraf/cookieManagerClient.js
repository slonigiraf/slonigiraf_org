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
      title="Cookie Settings"
      description="We use cookies to improve your experience. Manage your preferences below."
      onSave={(cookies) => {
        console.log('Saved cookie preferences:', cookies);
      }}
    />
  );
};

export default CookieManagerClient;