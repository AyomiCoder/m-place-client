import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ProtectedRoute from './utils/ProtectedRoute'
import Dashboard from './pages/Dashboard/Dashboard';

const Home = React.lazy(() => import('./pages/Home'));
const ItemDetails = React.lazy(() => import('./pages/ItemDetails'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
