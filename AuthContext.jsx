// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth0Client, setAuth0Client] = useState(null)
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initAuth0 = async () => {
      setIsLoading(true)

      // Initialize Auth0 client with environment variables
      const auth0 = await createAuth0Client({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI
      })
      setAuth0Client(auth0)

      // Handle redirect callback if present in URL
      if (window.location.search.includes('code=')) {
        await auth0.handleRedirectCallback()
        window.history.replaceState({}, document.title, '/')
      }

      // Check authentication status
      const authenticated = await auth0.isAuthenticated()
      const currentUser = authenticated ? await auth0.getUser() : null

      setIsAuthenticated(authenticated)
      setUser(currentUser)
      setIsLoading(false)
    }

    initAuth0()
  }, [])

  // Login function
  const login = async () => {
    if (auth0Client) {
      await auth0Client.loginWithRedirect()
    }
  }

  // Signup function
  const signup = async () => {
    if (auth0Client) {
      await auth0Client.loginWithRedirect({ screen_hint: 'signup' })
    }
  }

  // Logout function
  const logout = () => {
    if (auth0Client) {
      auth0Client.logout({
        returnTo: import.meta.env.VITE_AUTH0_REDIRECT_URI
      })
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook for easier access
export const useAuth = () => useContext(AuthContext)
