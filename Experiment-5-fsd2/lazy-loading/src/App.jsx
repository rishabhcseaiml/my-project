import React, { useState } from 'react';
import './styles.css';
import User from './user';

function App() {
  const [load, setLoad] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <h1>Lazy Loading Playground</h1>
          <p className="tag">Simple demo — load the user profile below</p>
        </div>

        <div className="controls">
          <button className="btn" onClick={() => setLoad(true)}>Load User</button>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-text">
            <h2>Load user</h2>
            <p>Click the button to show the user profile. The avatar image is loaded from the profile.</p>
          </div>
        </section>

        <section className="user-area centered">
          {load ? (
            <User />
          ) : (
            <div className="hint">Press <strong>Load User</strong> to show the profile.</div>
          )}
        </section>
      </main>

      <footer className="footer">Made with ❤️</footer>
    </div>
  );
}

export default App;