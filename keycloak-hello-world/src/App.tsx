import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import keycloak from './keycloak';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    keycloak.onAuthSuccess = () => {
      setAuthenticated(true);
      setLoading(false);
    };
    keycloak.onAuthLogout = () => {
      setAuthenticated(false);
      setLoading(false);
    };
    if (keycloak.authenticated) {
      setAuthenticated(true);
      setLoading(false);
    } else {
      setAuthenticated(false);
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!authenticated) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => keycloak.login()}>Login</button>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <button onClick={() => keycloak.logout()}>Logout</button>
      </header>
    </div>
  );
}

export default App;
