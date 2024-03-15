import React from 'react';

const FeatureToggle = ({ isEnabled, featureName }) => {
  return (
    <div>
      {isEnabled ? (
        <p>Feature {featureName} is enabled</p>
      ) : (
        <p>Feature {featureName} is disabled</p>
      )}
    </div>
  );
};

export default FeatureToggle;
