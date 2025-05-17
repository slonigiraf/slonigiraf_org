import React, { useState, useEffect } from 'react';

const Consent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setShow(true);
        }
    }, []);

    const handleConsent = (accepted) => {
        localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'rejected');
        setShow(false);

        if (accepted) {
            loadAnalytics();
        }
    };

    const loadAnalytics = () => {
        // Google Analytics
        const gaScript = document.createElement('script');
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID';
        gaScript.async = true;
        document.body.appendChild(gaScript);

        gaScript.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'YOUR-GA-ID');
        };

        // Yandex Metrika
        const ymScript = document.createElement('script');
        ymScript.innerHTML = `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(YOUR-YM-ID, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
        `;
        document.body.appendChild(ymScript);
    };

    if (!show) return null;

    return (
        <div className="cookie-modal-overlay">
            <div className="cookie-modal">
                <h5>We use cookies</h5>
                <p>
                    This site uses cookies, including Google Analytics and Yandex Metrika, to improve your experience and analyze traffic.
                    You can accept or reject non-essential cookies. Learn more in our <a href="/privacy-policy">Privacy Policy</a>.
                </p>
                <div className="cookie-buttons">
                    <button className="btn btn-secondary" onClick={() => handleConsent(false)}>Reject</button>
                    <button className="btn btn-warning" onClick={() => handleConsent(true)}>Accept all</button>
                </div>
            </div>
        </div>
    );
};

export default Consent;