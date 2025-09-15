// This is Route 1 - your first page component
// BEGINNER GUIDE: This is where you would build your actual page content
// Currently it's just a placeholder with some demo React functionality

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Route1() {
  // useState is a React Hook that lets us store and update data
  // When 'count' changes, the component automatically re-renders
  const [count, setCount] = useState(0)

  // CONTEXT USAGE GUIDE:
  // If you set up a context in App.jsx, you would use it here like this:
  // import { useContext } from 'react'
  // import { AppContext } from '../context/AppContext'
  // const { user, setUser } = useContext(AppContext)

  return (
    <>
      {/* This is the JSX that gets displayed on the page */}
      {/* JSX is like HTML but you can use JavaScript inside {} brackets */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Route 1</h1>

      <div className="card">
        {/* This button demonstrates React state - clicking it updates the count */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Work in progress</p>

        {/* BEGINNER TIP: Replace this content with your actual page features */}
        {/* You might add forms, lists, images, or call APIs here */}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Route1