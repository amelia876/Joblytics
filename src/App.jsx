/**
 * Main Application Component
 * 
 * This is the root component of the Joblytics application that sets up:
 * - Auth0 OAuth provider for authentication
 * - Custom authentication context
 * - React Router for navigation
 * - Protected routes that require authentication
 * - Navigation with authentication button
 * 
 * OAuth Integration:
 * - Auth0Provider wraps the entire app to enable OAuth authentication
 * - AuthProvider provides custom authentication state management
 * - All routes are protected and require user authentication
 * - Navigation includes authentication status and user controls
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Home, BarChart3, Briefcase, Info, User } from 'lucide-react'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import AuthButton from './components/AuthButton'
import ProtectedRoute from './components/ProtectedRoute'
import UserProfile from './components/UserProfile'
import { auth0Config } from './config/auth0'
import Route1 from './pages/Route1'
import Route2 from './pages/Route2'
import Route3 from './pages/Route3'
import Route4 from './pages/Route4'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    // Auth0Provider: Enables OAuth authentication throughout the app
    // This provider handles the OAuth flow, token management, and user state
    <Auth0Provider
      domain={auth0Config.domain}                    // Auth0 tenant domain
      clientId={auth0Config.clientId}               // Auth0 application client ID
      authorizationParams={auth0Config.authorizationParams}  // OAuth configuration
    >
      {/* Custom AuthProvider: Provides additional authentication state and methods */}
      {/* This wraps our custom authentication context around the app */}
      <AuthProvider>
        {/* React Router: Handles client-side navigation */}
        <Router>
          <div className="app">
            {/* Navigation bar with protected route links and authentication button */}
            <nav className="nav">
              {/* Navigation links to protected routes */}
              <div className="nav-links">
                  <Link to="/" className="nav-link">
                  <Briefcase size={20} />
                  Joblytics
                </Link>
                <Link to="/route1" className="nav-link">
                  <Home size={20} />
                  Route 1
                </Link>
                <Link to="/route2" className="nav-link">
                  <BarChart3 size={20} />
                  Route 2
                </Link>
                <Link to="/route3" className="nav-link">
                  <Briefcase size={20} />
                  Route 3
                </Link>
                <Link to="/route4" className="nav-link">
                  <Info size={20} />
                  Route 4
                </Link>
                <Link to="/profile" className="nav-link">
                  <User size={20} />
                  Profile
                </Link>
              </div>
              
              {/* Authentication button that shows login/logout based on auth state */}
              <AuthButton />
            </nav>

            {/* Main content area with protected routes */}
            <main className="main">
              <Routes>
                {/* All routes are wrapped with ProtectedRoute to require authentication */}
                {/* If user is not authenticated, they'll see the login page instead */}
                <Route path="/" element={<LandingPage />} />
                
                <Route path="/route1" element={
                  <ProtectedRoute>
                    <Route1 />
                  </ProtectedRoute>
                } />
                <Route path="/route2" element={
                  <ProtectedRoute>
                    <Route2 />
                  </ProtectedRoute>
                } />
                <Route path="/route3" element={
                  <ProtectedRoute>
                    <Route3 />
                  </ProtectedRoute>
                } />
                <Route path="/route4" element={
                  <ProtectedRoute>
                    <Route4 />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </Auth0Provider>
  )
}

export default App
