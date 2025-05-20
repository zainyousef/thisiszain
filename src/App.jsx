import './App.css';
import WhiteLogo from './assets/Z - White text.png';
import WhiteURL from './assets/z website name white.png';
import React from 'react';

function App() {
  return (
    <>
      <header className="header">
        <h1></h1>
      </header>
      <main className="main-content">
        <img src={WhiteLogo} alt="Zain Logo" className="zain" />
        <div className="matrix-text">
          {Array.from({ length: 1000 }).map((_, i) => (
            <span
              key={i}
              className="woo"
              style={{
                animationDelay: `${Math.random() * 5}s`, // Shorter delay
                animationDuration: `${Math.random() * 5 + 5}s`, // Varying duration
              }}
            >
              woo
            </span>
          ))}
        </div>
      </main>
      <footer className="footer">
        <img src={WhiteURL} alt="Zain URL" className="website" />
      </footer>
    </>
  );
}

export default App;