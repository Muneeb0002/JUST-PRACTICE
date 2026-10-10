import { useState } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('login') // 'login' or 'signup'

  return (
    <div className="auth-container">
      <div className="auth-nav">
        <button
          className={`auth-nav-btn ${currentPage === 'login' ? 'active' : ''}`}
          onClick={() => setCurrentPage('login')}
        >
          Login Page
        </button>
        <button
          className={`auth-nav-btn ${currentPage === 'signup' ? 'active' : ''}`}
          onClick={() => setCurrentPage('signup')}
        >
          Signup Page
        </button>
      </div>

      {currentPage === 'login' ? (
        <Login onSwitchToSignup={() => setCurrentPage('signup')} />
      ) : (
        <Signup onSwitchToLogin={() => setCurrentPage('login')} />
      )}
    </div>
  )
}

export default App
