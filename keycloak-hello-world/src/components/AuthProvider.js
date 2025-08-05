import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../keycloak';

const AuthProvider = ({ children }) => {
  const keycloakProviderInitConfig = {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
  };

  const handleKeycloakEvent = (event, error) => {
    console.log('Keycloak event:', event, error);
  };

  const handleKeycloakTokens = (tokens) => {
    console.log('Keycloak tokens:', tokens);
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={keycloakProviderInitConfig}
      onEvent={handleKeycloakEvent}
      onTokens={handleKeycloakTokens}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default AuthProvider;