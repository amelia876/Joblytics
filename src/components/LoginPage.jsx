/**
 * Login Page Component
 * 
 * This component provides the main authentication interface for users.
 * It displays when users try to access protected routes without being authenticated.
 * 
 * Features:
 * - Dual authentication options (Sign In / Sign Up)
 * - Loading state handling
 * - Professional UI with feature highlights
 * - Responsive design for all screen sizes
 * 
 * OAuth Integration:
 * - Uses Auth0's hosted login page for security
 * - Supports both login and signup flows
 * - Handles authentication state changes automatically
 */
import './LoginPage.css'; //This is used to import the CSS file for styling the LoginPage component and the CSS page should be created in the same folder as the jsx document
import Joblyticslogo from '../assets/Joblyticslogo.svg';


import { useAuth } from '../context/AuthContext'
import { LogIn, UserPlus, Shield, Zap } from 'lucide-react'

const LoginPage = () => {
  // Get authentication methods from context
  const { login, signup, isLoading } = useAuth()

  // Show loading state while authentication is being processed
  // This provides feedback during the OAuth redirect flow
  if (isLoading) {
    return (
      <div className="login-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Header section with app branding */}
        <div className="login-header">
          <h1>Welcome to Joblytics</h1>
          <p>Your comprehensive job analytics platform</p>
        </div>

        {/* Authentication options grid */}
        <div className="auth-options">
          {/* Sign In option for existing users */}
          <div className="auth-card">
            <div className="auth-icon">
              <LogIn size={32} />
            </div>
            <h3>Sign In</h3>
            <p>Access your existing account</p>
            <button 
              onClick={login}              // Initiates OAuth login flow
              className="auth-btn primary"
            >
              Sign In
            </button>
          </div>

          {/* Sign Up option for new users */}
          <div className="auth-card">
            <div className="auth-icon">
              <UserPlus size={32} />
            </div>
            <h3>Sign Up</h3>
            <p>Create a new account</p>


            <button 
              onClick={signup}             // Initiates OAuth signup flow
              className="auth-btn secondary"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Feature highlights to build trust */}
        <div className="features">
          <div className="feature">
            <Shield size={20} />
            <span>Secure OAuth Authentication</span>
          </div>
          <div className="feature">
            <Zap size={20} />
            <span>Fast & Reliable</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
