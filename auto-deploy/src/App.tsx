import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Auto Deploy React App</h1>
        <p>CI/CD ด้วย Jenkins + Firebase + Docker</p>

        <div className="button-group">
          <a
            className="App-button"
            href="https://github.com/NichaNanO/Webapp-Jenkins.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            ดูโปรเจกต์บน GitHub
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
