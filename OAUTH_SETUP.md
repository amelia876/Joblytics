# OAuth Authentication Setup for Joblytics

This document provides step-by-step instructions for setting up OAuth authentication using Auth0 in your Joblytics application.

## Prerequisites

- Node.js and npm installed
- Auth0 account (free tier available)

## Setup Steps

### 1. Install Dependencies

The required Auth0 dependency has been added to your `package.json`. Install it by running:

```bash
npm install
```

### 2. Create Auth0 Application

1. Go to [Auth0 Dashboard](https://manage.auth0.com/)
2. Sign up for a free account if you don't have one
3. Create a new application:
   - Click "Applications" in the sidebar
   - Click "Create Application"
   - Name it "Joblytics"
   - Select "Single Page Application"
   - Click "Create"

### 3. Configure Auth0 Application

1. In your Auth0 application settings:
   - **Allowed Callback URLs**: Add `http://localhost:5173` (for development)
   - **Allowed Logout URLs**: Add `http://localhost:5173`
   - **Allowed Web Origins**: Add `http://localhost:5173`
   - **Allowed Origins (CORS)**: Add `http://localhost:5173`

2. Copy your **Domain** and **Client ID** from the application settings

### 4. Environment Configuration

Create a `.env` file in your project root with the following content:

```env
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
```

Replace `your-domain.auth0.com` and `your-client-id` with your actual Auth0 values.

### 5. Test the Implementation

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to any protected route (Route 1-4 or Profile)
3. You should see the login page
4. Click "Sign In" or "Sign Up" to test the OAuth flow

## Features Implemented

### Authentication Components
- **AuthButton**: Shows login/logout button with user info
- **LoginPage**: Beautiful login/signup interface
- **ProtectedRoute**: Wraps routes that require authentication
- **UserProfile**: Displays user information and profile management

### Authentication Context
- **AuthContext**: Provides authentication state and methods throughout the app
- **useAuth hook**: Easy access to authentication state and methods

### Protected Routes
All main routes (Route 1-4) and the new Profile route are now protected and require authentication.

### User Experience
- Seamless OAuth flow with Auth0
- Loading states during authentication
- User profile display with avatar and details
- Responsive design that matches your app's theme

## Customization

### Adding More OAuth Providers
To add additional OAuth providers (Google, GitHub, etc.):

1. In your Auth0 dashboard, go to "Authentication" > "Social"
2. Enable the desired providers
3. Configure them with your app credentials
4. Users will see these options in the Auth0 login screen

### Customizing User Profile
The `UserProfile` component can be extended to include:
- Profile editing functionality
- Account settings
- Additional user metadata

### Styling
All authentication components use CSS classes that can be customized in `src/App.css` to match your brand.

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all sensitive configuration
- Auth0 handles all security aspects of authentication
- Tokens are managed securely by the Auth0 React SDK

## Troubleshooting

### Common Issues

1. **"Invalid redirect URI" error**:
   - Ensure your callback URLs in Auth0 match your development URL
   - Check that your `.env` file has the correct domain and client ID

2. **"Application not found" error**:
   - Verify your Auth0 domain and client ID are correct
   - Ensure your Auth0 application is active

3. **CORS errors**:
   - Add your development URL to "Allowed Web Origins" in Auth0 settings

### Getting Help

- Check the [Auth0 React SDK documentation](https://auth0.com/docs/quickstart/spa/react)
- Review the [Auth0 Community](https://community.auth0.com/) for common issues
- Check the browser console for detailed error messages

## Next Steps

With OAuth authentication now implemented, you can:

1. Add role-based access control
2. Implement user preferences and settings
3. Add user-specific data and analytics
4. Integrate with your backend API using the access tokens
5. Add social login providers (Google, GitHub, etc.)
