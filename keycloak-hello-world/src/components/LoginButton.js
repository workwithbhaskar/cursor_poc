import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const LoginButton = () => {
  const { keycloak } = useKeycloak();

  const handleLogin = () => {
    keycloak.login();
  };

  const handleLogout = () => {
    keycloak.logout();
  };

  if (keycloak.authenticated) {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <p>Welcome, {keycloak.tokenParsed?.preferred_username || 'User'}!</p>
        <button 
          onClick={handleLogout}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Please log in to continue</h2>
      <button 
        onClick={handleLogin}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Login with Keycloak
      </button>
    </div>
  );
};

export default LoginButton;