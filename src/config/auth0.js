/**
 * Auth0 Configuration for Joblytics
 * 
 * This file contains the configuration for Auth0 OAuth authentication.
 * It centralizes all Auth0-related settings and provides fallback values
 * for development and testing.
 * 
 * OAuth Configuration:
 * - Domain: Your Auth0 tenant domain
 * - Client ID: Your Auth0 application client ID
 * - Redirect URI: Where users are sent after authentication
 * 
 * Security Notes:
 * - Never commit actual credentials to version control
 * - Use environment variables for production
 * - Keep your Auth0 dashboard secure
 */

// Auth0 configuration object with environment variable fallbacks
export const auth0Config = {
  // Auth0 tenant domain (e.g., 'your-tenant.auth0.com')
  // This identifies your Auth0 account/tenant
  domain: import.meta.env.VITE_AUTH0_DOMAIN || 'your-auth0-domain.auth0.com',
  
  // Auth0 application client ID
  // This identifies your specific application within Auth0
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || 'your-auth0-client-id',
  
  // OAuth authorization parameters
  authorizationParams: {
    // Where to redirect users after successful authentication
    // This must match the callback URLs configured in Auth0 dashboard
    redirect_uri: window.location.origin
  }
}

/**
 * Auth0 Setup Instructions:
 * 
 * 1. Create Auth0 Account:
 *    - Go to https://auth0.com and sign up for free
 *    - Choose the appropriate plan (free tier available)
 * 
 * 2. Create Application:
 *    - In Auth0 dashboard, go to Applications
 *    - Click "Create Application"
 *    - Name it "Joblytics" (or your preferred name)
 *    - Select "Single Page Application" as the type
 *    - Click "Create"
 * 
 * 3. Configure Application Settings:
 *    - Copy your Domain and Client ID from the application settings
 *    - Add these URLs to "Allowed Callback URLs":
 *      - http://localhost:5173 (for development)
 *      - https://yourdomain.com (for production)
 *    - Add these URLs to "Allowed Logout URLs":
 *      - http://localhost:5173 (for development)
 *      - https://yourdomain.com (for production)
 *    - Add these URLs to "Allowed Web Origins":
 *      - http://localhost:5173 (for development)
 *      - https://yourdomain.com (for production)
 * 
 * 4. Environment Configuration:
 *    - Create a .env file in your project root
 *    - Add your Auth0 credentials:
 *      VITE_AUTH0_DOMAIN=your-domain.auth0.com
 *      VITE_AUTH0_CLIENT_ID=your-client-id
 *    - Never commit the .env file to version control
 * 
 * 5. Test Configuration:
 *    - Start your development server: npm run dev
 *    - Navigate to a protected route
 *    - Verify the OAuth flow works correctly
 *    - Check that users can log in and out successfully
 */
