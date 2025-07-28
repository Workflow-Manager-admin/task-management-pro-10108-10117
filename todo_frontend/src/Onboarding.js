import React from 'react';
import './Onboarding.css';

/*
  PUBLIC_INTERFACE
  Onboarding screen component based on the provided Figma design reference.
  Renders onboarding hero image, progress dots, informational text, and "Next" button.
*/
function Onboarding() {
  return (
    <div className="onboarding-root">
      <div className="onboarding-statusbar">
        <span className="onboarding-time">9:41</span>
        <span className="onboarding-icons">
          <span role="img" aria-label="wifi">📶</span>
          <span role="img" aria-label="battery">🔋</span>
        </span>
      </div>
      <div className="onboarding-header">
        <span className="onboarding-icon-star">
          {/* Star SVG */}
          <svg width="32" height="32"><circle cx="16" cy="16" r="14" fill="#FFD700" /></svg>
        </span>
        <div>
          <span className="onboarding-header-label">Templates</span>
          <span className="onboarding-header-title">Onboarding</span>
        </div>
      </div>
      <div className="onboarding-heroimg" />
      <div className="onboarding-main">
        <div className="onboarding-pagination">
          {/* Three pagination dots: first active */}
          <span className="onboarding-dot onboarding-dot-active" />
          <span className="onboarding-dot" />
          <span className="onboarding-dot" />
        </div>
        <h2 className="onboarding-title">
          Create a prototype in just a few minutes
        </h2>
        <div className="onboarding-desc">
          Enjoy these pre-made components and worry only about creating the best product ever.
        </div>
        <button className="onboarding-btn-primary">Next</button>
      </div>
    </div>
  );
}

export default Onboarding;
