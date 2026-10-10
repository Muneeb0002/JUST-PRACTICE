import { useState } from 'react'
import './Auth.css'

export default function Login({ onSwitchToSignup }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      setMessage('Please fill in all fields.')
      return
    }
    setMessage(`Successfully logged in as ${formData.email}!`)
  }

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h2>Welcome Back</h2>
        <p>Please enter your credentials to log in.</p>
      </div>

      {message && (
        <div className={`auth-alert ${message.includes('Successfully') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="login-email">Email Address</label>
          <input
            type="email"
            id="login-email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="login-password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div className="form-options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span>Remember me</span>
          </label>
          <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Reset link sent to your email!'); }} className="forgot-link">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="auth-btn">
          Log In
        </button>
      </form>

      <div className="auth-footer">
        <p>
          Don't have an account?{' '}
          <button type="button" className="switch-btn" onClick={onSwitchToSignup}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
}

