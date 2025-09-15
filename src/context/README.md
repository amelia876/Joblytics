# Context Folder - For Beginners

## What is Context?

Context is like a "shared storage box" that all your React components can access. Instead of passing data from parent to child components one by one (which gets messy), you can put data in context and any component can grab it directly.

## When Do You Need Context?

You need context when:
- Multiple pages need the same data (like user information)
- You're passing the same data through many components
- You want to avoid "prop drilling" (passing props down many levels)

## How to Create Context

### Step 1: Create a Context File
Create a file like `AppContext.js` in this folder:

```javascript
import { createContext, useContext, useState } from 'react'

// Create the context
const AppContext = createContext()

// Create a provider component
export function AppProvider({ children }) {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')

  const value = {
    user,
    setUser,
    theme,
    setTheme
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}
```

### Step 2: Wrap Your App
In `App.jsx`, wrap everything with your provider:

```javascript
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <Router>
        {/* Your routes and components */}
      </Router>
    </AppProvider>
  )
}
```

### Step 3: Use Context in Components
In any component/page:

```javascript
import { useAppContext } from '../context/AppContext'

function Route1() {
  const { user, setUser, theme, setTheme } = useAppContext()

  return (
    <div>
      <h1>Hello, {user?.name || 'Guest'}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  )
}
```

## Real-World Examples

### User Authentication
```javascript
// Store logged-in user info
const [user, setUser] = useState(null)
const [isLoggedIn, setIsLoggedIn] = useState(false)
```

### Shopping Cart
```javascript
// Store cart items across all pages
const [cartItems, setCartItems] = useState([])
const [totalPrice, setTotalPrice] = useState(0)
```

### App Settings
```javascript
// Store user preferences
const [theme, setTheme] = useState('light')
const [language, setLanguage] = useState('en')
```

## Think of Context Like...

- A **shared notebook** that everyone in your team can read and write in
- A **whiteboard** that all rooms in your house can see
- A **cloud storage** that all your devices can access

## Important Notes for Beginners

1. **Don't overuse context** - Only use it for data that multiple components actually need
2. **Start simple** - Begin with just one or two values, add more as needed
3. **One context per concern** - Create separate contexts for unrelated data (UserContext, ThemeContext, etc.)
4. **Context updates re-render components** - When context data changes, all components using it will re-render

## File Structure Suggestion

```
src/
├── context/
│   ├── AppContext.js      # Main app state
│   ├── UserContext.js     # User authentication
│   ├── ThemeContext.js    # UI theme settings
│   └── README.md          # This file
```

Remember: Context is powerful but not always necessary. For simple data sharing between a parent and child, regular props are often better!