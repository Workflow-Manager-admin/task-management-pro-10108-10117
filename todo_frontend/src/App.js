import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Onboarding from './Onboarding';
import Settings from './Settings';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [screen, setScreen] = useState('onboarding'); // "onboarding" | "settings"

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const handleScreenSwitch = () => {
    setScreen(s => s === 'onboarding' ? 'settings' : 'onboarding');
  };

  return (
    <div className="App">
      <header className="App-header" style={{ background: 'transparent', minHeight: 30, boxShadow: 'none' }}>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <button
          style={{
            position: 'absolute',
            left: 20,
            top: 20,
            zIndex: 10,
            background: '#f8f8fd',
            border: '1px solid #ececec',
            borderRadius: '8px',
            padding: '7px 14px',
            cursor: 'pointer',
            fontWeight: 600,
            color: '#321f68'
          }}
          onClick={handleScreenSwitch}
        >
          {screen === 'onboarding' ? 'Show Settings Screen' : 'Show Onboarding Screen'}
        </button>
      </header>
      <div style={{ width: '100%', minHeight: '100vh' }}>
        {screen === 'onboarding' ? <Onboarding /> : <Settings />}
      </div>
    </div>
  );
}

export default App;
