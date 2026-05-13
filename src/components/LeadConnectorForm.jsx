'use client'
import { useEffect } from 'react';

const LeadConnectorForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/dDvTFDgECVLq4k1LsCBq"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
        id="inline-dDvTFDgECVLq4k1LsCBq"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form"
        data-height="964"
        data-layout-iframe-id="inline-dDvTFDgECVLq4k1LsCBq"
        data-form-id="dDvTFDgECVLq4k1LsCBq"
        title="Website Form"
      ></iframe>
    </div>
  );
};

export default LeadConnectorForm;
