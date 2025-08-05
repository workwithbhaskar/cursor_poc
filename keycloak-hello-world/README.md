# Keycloak React Hello World App

A simple React application demonstrating authentication with Keycloak. Users can log in through Keycloak and access a protected Hello World page.

## Features

- 🔐 Keycloak authentication integration
- 🚀 Protected routes
- 👋 Hello World page for authenticated users
- 🎨 Clean, modern UI
- 📱 Responsive design

## Prerequisites

- Node.js (v14 or higher)
- A running Keycloak instance (local or remote)

## Keycloak Setup

Before running the app, you need to configure Keycloak:

### 1. Start Keycloak (if running locally)

If you don't have Keycloak running yet, you can start it with Docker:

```bash
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev
```

### 2. Create a Client in Keycloak

1. Access Keycloak Admin Console at `http://localhost:8080`
2. Log in with admin credentials
3. Select your realm (or create a new one)
4. Go to **Clients** → **Create client**
5. Configure the client:
   - **Client ID**: `react-app`
   - **Client type**: `OpenID Connect`
   - **Client authentication**: `OFF` (public client)
6. In the client settings:
   - **Valid redirect URIs**: `http://localhost:3000/*`
   - **Valid post logout redirect URIs**: `http://localhost:3000/*`
   - **Web origins**: `http://localhost:3000`

### 3. Update Configuration

Edit `src/keycloak.js` to match your Keycloak setup:

```javascript
const keycloakConfig = {
  url: 'http://localhost:8080', // Your Keycloak URL
  realm: 'your-realm-name',     // Your realm name
  clientId: 'react-app',        // Your client ID
};
```

## Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## How It Works

1. **Initial Load**: The app checks if the user is authenticated
2. **Login Flow**: If not authenticated, shows a login button that redirects to Keycloak
3. **Authentication**: User logs in through Keycloak UI
4. **Redirect Back**: After successful login, user is redirected back to the app
5. **Protected Content**: Authenticated users see the Hello World page with their user info
6. **Logout**: Users can log out, which clears the session and redirects to Keycloak

## Project Structure

```
src/
├── components/
│   ├── AuthProvider.js     # Keycloak context provider
│   ├── LoginButton.js      # Login/logout button component
│   └── HelloWorld.js       # Protected hello world page
├── keycloak.js            # Keycloak configuration
└── App.js                 # Main app with routing
```

## Configuration Options

### Keycloak Init Options

In `AuthProvider.js`, you can modify the initialization options:

- `onLoad: 'check-sso'` - Checks if user is already logged in
- `onLoad: 'login-required'` - Forces login on app load
- `checkLoginIframe: false` - Disables login status checking

### Styling

The app uses inline styles for simplicity. You can customize the appearance by modifying the style objects in each component.

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure your Keycloak client has the correct web origins configured
2. **Redirect Issues**: Verify that redirect URIs in Keycloak match your app's URL
3. **Client Not Found**: Ensure the client ID in `keycloak.js` matches the one in Keycloak
4. **Realm Issues**: Check that the realm name is correct

### Debug Mode

Enable debug logging by adding this to your Keycloak config:

```javascript
const keycloak = new Keycloak(keycloakConfig);
keycloak.enableLogging = true;
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## License

This project is open source and available under the MIT License.
