// This is Route 3 - another placeholder page component
// BEGINNER GUIDE: Each route file represents a different "page" in your app
// You can copy this structure to create new pages

import { Briefcase } from 'lucide-react'

function Route3() {
  // CONTEXT USAGE GUIDE:
  // To use shared state/data across components:
  // import { useContext } from 'react'
  // import { AppContext } from '../context/AppContext'
  // const { sharedValue, setSharedValue } = useContext(AppContext)

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Icons from Lucide React make your app look professional */}
      <Briefcase size={48} style={{ margin: '0 auto 1rem' }} />

      <h1>Route 3</h1>
      <p>Work in progress</p>

      {/* BEGINNER TIP: This is where you build your page features */}
      {/* Consider adding: buttons, input fields, lists, cards, etc. */}
    </div>
  )
}

export default Route3