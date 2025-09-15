// This is Route 4 - the final placeholder page component
// BEGINNER GUIDE: You can duplicate this file to create Route5, Route6, etc.
// Just remember to update the imports in App.jsx when you add new routes

import { Info } from 'lucide-react'

function Route4() {
  // CONTEXT USAGE GUIDE:
  // When you have data that multiple pages need to share:
  // import { useContext } from 'react'
  // import { AppContext } from '../context/AppContext'
  // const contextData = useContext(AppContext)

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Info icon - browse lucide.dev to see all available icons */}
      <Info size={48} style={{ margin: '0 auto 1rem' }} />

      <h1>Route 4</h1>
      <p>Work in progress</p>

      {/* BEGINNER TIP: Start small and build up your features gradually */}
      {/* Focus on one piece of functionality at a time */}
    </div>
  )
}

export default Route4