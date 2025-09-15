// This is Route 2 - a placeholder page component
// BEGINNER GUIDE: This shows the basic structure of a simple page
// Replace this content with your actual features (forms, data displays, etc.)

import { BarChart3 } from 'lucide-react'

function Route2() {
  // CONTEXT USAGE GUIDE:
  // If you need to access shared data from context, import and use it here:
  // import { useContext } from 'react'
  // import { AppContext } from '../context/AppContext'
  // const { data, setData } = useContext(AppContext)

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Lucide React icon - you can change this to any icon you want */}
      <BarChart3 size={48} style={{ margin: '0 auto 1rem' }} />

      <h1>Route 2</h1>
      <p>Work in progress</p>

      {/* BEGINNER TIP: Add your page content here */}
      {/* Examples: user forms, data tables, image galleries, etc. */}
    </div>
  )
}

export default Route2