import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/', // Adjust if your Keycloak runs elsewhere
  realm: 'master',              // Change to your realm
  clientId: 'react-client',     // Change to your clientId
});

export default keycloak;