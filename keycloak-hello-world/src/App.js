import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import AuthProvider from './components/AuthProvider';
import LoginButton from './components/LoginButton';
import HelloWorld from './components/HelloWorld';
import './App.css';

function AppContent() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Keycloak React Demo</h1>
        
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={
                keycloak.authenticated ? 
                  <Navigate to="/hello" replace /> : 
                  <LoginButton />
              } 
            />
            <Route 
              path="/hello" 
              element={
                keycloak.authenticated ? 
                  <>
                    <HelloWorld />
                    <LoginButton />
                  </> :
                  <Navigate to="/" replace />
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
