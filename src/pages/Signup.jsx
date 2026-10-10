import { useState } from 'react'
import './Auth.css'

export default function Signup({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
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
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage('Please fill in all required fields.')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match!')
      return
    }
    if (!formData.acceptTerms) {
      setMessage('Please accept the terms and conditions.')
      return
    }
    setMessage(`Account created successfully for ${formData.fullName}!`)
  }

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h2>Create Account</h2>
        <p>Sign up today to get started with your account.</p>
      </div>

      {message && (
        <div className={`auth-alert ${message.includes('successfully') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="signup-fullname">Full Name</label>
          <input
            type="text"
            id="signup-fullname"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-email">Email Address</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="signup-password"
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

        <div className="form-group">
          <label htmlFor="signup-confirmpassword">Confirm Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="signup-confirmpassword"
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
            <span>I agree to the Terms & Conditions</span>
          </label>
        </div>

        <button type="submit" className="auth-btn">
          Create Account
        </button>
      </form>

      <div className="auth-footer">
        <p>
          Already have an account?{' '}
          <button type="button" className="switch-btn" onClick={onSwitchToLogin}>
            Log In
          </button>
        </p>
      </div>
    </div>
  )
}

