
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('token'); // Check if token exists

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" />;
  }

  return <>{children}</>; // Render the children (protected component)
};

export default ProtectedRoute;
