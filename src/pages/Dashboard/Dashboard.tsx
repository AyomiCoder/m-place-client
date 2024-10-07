import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import profilePlaceholder from '../../assets/react.svg'; // Replace this with your actual image path

const Dashboard = () => {
  const [profile, setProfile] = useState<any>(null); // Profile state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login if no token
          return;
        }

        // Fetch profile data
        const { data } = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile(data); // Set profile data
      } catch (err) {
        console.error(err);
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-lg p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition focus:outline-none"
          >
            Logout
          </button>
        </div>

        <div className="text-center mt-6">
          <img
            src={profile?.avatar || profilePlaceholder}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-md"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">{profile?.name || 'John Doe'}</h2>
          <p className="text-gray-500 mb-6">{profile?.email || 'Email not available'}</p>
        </div>

        <div className="bg-blue-100 rounded-lg p-4 text-left">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Contact Information</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Phone:</strong> {profile?.phone || 'Not provided'}</p>
            <p><strong>Address:</strong> {profile?.address || 'Not provided'}</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all focus:outline-none">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
