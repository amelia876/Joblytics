/**
 * Authentication Context for Joblytics
 * 
 * This context provides a centralized way to manage authentication state
 * throughout the application using Auth0's OAuth implementation.
 * 
 * Key Features:
 * - Manages user authentication state
 * - Provides login/logout functionality
 * - Handles user profile data
 * - Manages JWT access tokens
 * - Provides loading states for authentication
 */

import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// Create React Context for authentication state
// This allows any component in the app to access auth data without prop drilling
const AuthContext = createContext()

/**
 * Custom hook to access authentication context
 * 
 * This hook provides a clean way to access authentication state and methods
 * from any component in the application.
 * 
 * @returns {Object} Authentication context value
 * @throws {Error} If used outside of AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

/**
 * Authentication Provider Component
 * 
 * This component wraps the entire application and provides authentication
 * state and methods to all child components through React Context.
 * 
 * OAuth Flow Implementation:
 * 1. User clicks login -> redirects to Auth0 hosted login page
 * 2. User authenticates with Auth0 -> Auth0 redirects back with authorization code
 * 3. Auth0 SDK exchanges code for tokens -> stores tokens securely
 * 4. User state is updated -> components re-render with authenticated state
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to wrap
 */
export const AuthProvider = ({ children }) => {
  // Auth0 React SDK hook that provides authentication state and methods
  // This hook handles the entire OAuth flow automatically
  const {
    user,                    // Auth0 user object with profile data
    isAuthenticated,         // Boolean indicating if user is logged in
    isLoading,              // Boolean indicating if auth state is being determined
    loginWithRedirect,      // Function to initiate OAuth login flow
    logout,                 // Function to log out user
    getAccessTokenSilently  // Function to get JWT access token for API calls
  } = useAuth0()

  // Local state to store processed user profile data
  // We transform the Auth0 user object into a cleaner format
  const [userProfile, setUserProfile] = useState(null)

  /**
   * Effect to process and store user profile data when authentication state changes
   * 
   * This effect runs whenever the user's authentication status changes.
   * It transforms the Auth0 user object into a standardized format
   * that's easier to work with throughout the application.
   */
  useEffect(() => {
    if (isAuthenticated && user) {
      // Transform Auth0 user object into our standardized profile format
      setUserProfile({
        id: user.sub,              // Auth0 user ID (unique identifier)
        email: user.email,         // User's email address
        name: user.name,           // User's display name
        picture: user.picture,     // User's profile picture URL
        emailVerified: user.email_verified  // Whether email is verified
      })
    } else {
      // Clear profile data when user logs out
      setUserProfile(null)
    }
  }, [isAuthenticated, user])

  /**
   * Login function that initiates OAuth flow
   * 
   * This function redirects the user to Auth0's hosted login page.
   * The screen_hint parameter tells Auth0 to show the login form
   * instead of the signup form by default.
   */
  const login = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'login'  // Show login form instead of signup
      }
    })
  }

  /**
   * Signup function that initiates OAuth flow for new users
   * 
   * This function redirects the user to Auth0's hosted login page
   * with a hint to show the signup form for new users.
   */
  const signup = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup'  // Show signup form for new users
      }
    })
  }

  /**
   * Logout function that ends the user session
   * 
   * This function logs out the user from both the application
   * and Auth0, then redirects them back to the home page.
   */
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin  // Redirect to home page after logout
      }
    })
  }

  /**
   * Get JWT access token for API calls
   * 
   * This function retrieves the current JWT access token that can be used
   * to make authenticated API calls to your backend services.
   * 
   * @returns {Promise<string|null>} JWT access token or null if unavailable
   */
  const getToken = async () => {
    try {
      // Get the access token silently (without user interaction)
      return await getAccessTokenSilently()
    } catch (error) {
      console.error('Error getting access token:', error)
      return null
    }
  }

  // Context value object that will be provided to all child components
  // This includes all authentication state and methods
  const value = {
    user: userProfile,        // Processed user profile data
    isAuthenticated,         // Authentication status
    isLoading,              // Loading state
    login,                  // Login function
    signup,                 // Signup function
    logout: handleLogout,   // Logout function
    getToken               // Token retrieval function
  }

  // Provide the authentication context to all child components
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
