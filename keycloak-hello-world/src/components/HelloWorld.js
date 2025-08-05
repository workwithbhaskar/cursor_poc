import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const HelloWorld = () => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    return (
      <div style={{ textAlign: 'center', margin: '50px' }}>
        <h2>Access Denied</h2>
        <p>Please log in to view this page.</p>
      </div>
    );
  }

  return (
    <div style={{ 
      textAlign: 'center', 
      margin: '50px',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#28a745',
        fontSize: '3rem',
        marginBottom: '20px'
      }}>
        🎉 Hello World! 🎉
      </h1>
      <p style={{ 
        fontSize: '1.2rem',
        color: '#6c757d',
        marginBottom: '20px'
      }}>
        Congratulations! You have successfully authenticated with Keycloak.
      </p>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '4px',
        marginTop: '20px',
        border: '1px solid #dee2e6'
      }}>
        <h3>User Information:</h3>
        <p><strong>Username:</strong> {keycloak.tokenParsed?.preferred_username || 'N/A'}</p>
        <p><strong>Email:</strong> {keycloak.tokenParsed?.email || 'N/A'}</p>
        <p><strong>Name:</strong> {keycloak.tokenParsed?.name || 'N/A'}</p>
      </div>
    </div>
  );
};

export default HelloWorld;