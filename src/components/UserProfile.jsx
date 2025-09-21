/**
 * User Profile Component
 * 
 * This component displays comprehensive user profile information
 * and provides access to profile management features.
 * 
 * Features:
 * - User avatar and basic information display
 * - Detailed account information (email, verification status, user ID)
 * - Profile management action buttons
 * - Responsive design with professional styling
 * 
 * OAuth Integration:
 * - Displays user data from Auth0 user object
 * - Shows email verification status from OAuth provider
 * - Provides foundation for profile editing functionality
 */

import { useAuth } from '../context/AuthContext'
import { User, Mail, Shield, Calendar } from 'lucide-react'

const UserProfile = () => {
  // Get user data and authentication status from context
  const { user, isAuthenticated } = useAuth()

  // Don't render if user is not authenticated or user data is not available
  // This prevents errors and ensures component only shows when appropriate
  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="user-profile">
      {/* Profile header with avatar and basic info */}
      <div className="profile-header">
        <img 
          src={user.picture}           // User's profile picture from Auth0
          alt={user.name}              // Alt text for accessibility
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2>{user.name}</h2>         {/* User's display name */}
          <p className="profile-email">{user.email}</p>  {/* User's email */}
        </div>
      </div>

      {/* Detailed account information */}
      <div className="profile-details">
        {/* Email address with icon */}
        <div className="detail-item">
          <Mail size={16} />
          <span>Email: {user.email}</span>
        </div>
        
        {/* Email verification status from OAuth provider */}
        <div className="detail-item">
          <Shield size={16} />
          <span>Email Verified: {user.emailVerified ? 'Yes' : 'No'}</span>
        </div>
        
        {/* Auth0 user ID (unique identifier) */}
        <div className="detail-item">
          <User size={16} />
          <span>User ID: {user.id}</span>
        </div>
      </div>

      {/* Profile management action buttons */}
      <div className="profile-actions">
        {/* Edit profile button - can be extended to open profile editing modal */}
        <button className="action-btn primary">
          Edit Profile
        </button>
        
        {/* Account settings button - can be extended to open settings page */}
        <button className="action-btn secondary">
          Account Settings
        </button>
      </div>
    </div>
  )
}

export default UserProfile
