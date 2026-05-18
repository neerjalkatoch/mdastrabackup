import React from 'react';
import './ServiceLayout.css';

/**
 * ServiceLayout — A consistent wrapper for all service pages.
 * Ensures uniform global padding, max-width, and styling across services.
 */
const ServiceLayout = ({ children, className = '' }) => {
  return (
    <main className={`service-page-layout ${className}`}>
      {children}
    </main>
  );
};

export default ServiceLayout;
