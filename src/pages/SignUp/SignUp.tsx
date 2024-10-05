import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaLock, FaPhone, FaAddressCard } from 'react-icons/fa'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }> = ({ children, variant = 'primary', ...props }) => (
  <button
    {...props}
    className={`w-full px-6 py-2 font-semibold rounded-lg transition-all duration-200 ease-in-out ${
      variant === 'primary'
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-green-500 text-white hover:bg-green-600'
    }`}
  >
    {children}
  </button>
)

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign-up logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <FaUser className="text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <FaLock className="text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-500" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <FaAddressCard className="text-gray-500" />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <Button variant="primary">Create Account</Button>
        </form>
      </div>
    </div>
  )
}
