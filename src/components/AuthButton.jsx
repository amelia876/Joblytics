/**
 * Authentication Button Component
 * 
 * This component displays different authentication states in the navigation bar:
 * - Loading state: Shows spinner while checking authentication
 * - Unauthenticated state: Shows "Sign In" button
 * - Authenticated state: Shows user avatar, name, and logout button
 * 
 * The component automatically adapts its appearance based on the user's
 * authentication status, providing a seamless user experience.
 */

import { useAuth } from '../context/AuthContext'
import { LogIn, LogOut, User } from 'lucide-react'

const AuthButton = () => {
  // Get authentication state and methods from context
  const { isAuthenticated, isLoading, login, logout, user } = useAuth()

  // Show loading spinner while authentication state is being determined
  // This prevents UI flickering during the initial auth check
  if (isLoading) {
    return (
      <div className="auth-button loading">
        <div className="spinner"></div>
        Loading...
      </div>
    )
  }

  // Show user info and logout button when user is authenticated
  // This provides quick access to user profile and logout functionality
  if (isAuthenticated) {
    return (
      <div className="auth-button authenticated">
        {/* User information display with avatar and name */}
        <div className="user-info">
          <img 
            src={user?.picture}           // User's profile picture from Auth0
            alt={user?.name}              // Alt text for accessibility
            className="user-avatar"
          />
          <span className="user-name">{user?.name}</span>
        </div>
        
        {/* Logout button with icon */}
        <button 
          onClick={logout}                // Call logout function from context
          className="logout-btn"
          title="Logout"                  // Tooltip for accessibility
        >
          <LogOut size={16} />
        </button>
      </div>
    )
  }

  // Show sign in button when user is not authenticated
  // This initiates the OAuth login flow when clicked
  return (
    <div className="auth-button">
      <button 
        onClick={login}                   // Call login function from context
        className="login-btn"
      >
        <LogIn size={16} />
        Sign In
      </button>
    </div>
  )
}

export default AuthButton
