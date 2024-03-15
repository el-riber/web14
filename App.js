
import React from 'react';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Feature Toggle Demo</h1>
      </header>
      <main>
        <FeatureToggle isEnabled={true} featureName="Search" />
        <FeatureToggle isEnabled={false} featureName="Notifications" />
        <FeatureToggle isEnabled={true} featureName="Dark Mode" />
      </main>
    </div>
  );
}

export default App;

