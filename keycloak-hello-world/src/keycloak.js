import Keycloak from 'keycloak-js';

// Keycloak configuration for local instance
const keycloakConfig = {
  url: 'http://localhost:8080', // Default Keycloak URL
  realm: 'master', // Default realm, change this to your realm name
  clientId: 'react-app', // You'll need to create this client in Keycloak
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;