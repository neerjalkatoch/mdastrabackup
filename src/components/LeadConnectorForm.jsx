'use client'
import { useEffect } from 'react';

const LeadConnectorForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount if needed
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '610px' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/0yS4iD4qag7usS0jQ0HD"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
        id="inline-0yS4iD4qag7usS0jQ0HD"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 6"
        data-height="610"
        data-layout-iframe-id="inline-0yS4iD4qag7usS0jQ0HD"
        data-form-id="0yS4iD4qag7usS0jQ0HD"
        title="Form 6"
      ></iframe>
    </div>
  );
};

export default LeadConnectorForm;
