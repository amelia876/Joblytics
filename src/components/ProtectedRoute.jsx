/**
 * Protected Route Component
 * 
 * This component acts as a guard for routes that require authentication.
 * It checks the user's authentication status and either:
 * - Renders the protected content if user is authenticated
 * - Shows the login page if user is not authenticated
 * - Shows loading state while checking authentication
 * 
 * Usage:
 * Wrap any route component that requires authentication with this component.
 * The component will automatically handle the authentication flow.
 */

import { useAuth } from '../context/AuthContext'
import LoginPage from './LoginPage'

const ProtectedRoute = ({ children }) => {
  // Get authentication state from context
  const { isAuthenticated, isLoading } = useAuth()

  // Show loading state while authentication status is being determined
  // This prevents flashing of login page during initial auth check
  if (isLoading) {
    return (
      <div className="protected-route-loading">
        <div className="spinner"></div>
        <p>Verifying authentication...</p>
      </div>
    )
  }

  // If user is not authenticated, show login page
  // This redirects unauthenticated users to the authentication flow
  if (!isAuthenticated) {
    return <LoginPage />
  }

  // If user is authenticated, render the protected content
  // This allows access to the wrapped component/route
  return children
}

export default ProtectedRoute
