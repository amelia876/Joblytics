import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home, BarChart3, Briefcase, Info } from 'lucide-react'
import './App.css'
import Route1 from './pages/Route1'
import Route2 from './pages/Route2'
import Route3 from './pages/Route3'
import Route4 from './pages/Route4'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
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
        </nav>

        <main className="main">
          <Routes>
            <Route path="/route1" element={<Route1 />} />
            <Route path="/route2" element={<Route2 />} />
            <Route path="/route3" element={<Route3 />} />
            <Route path="/route4" element={<Route4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
