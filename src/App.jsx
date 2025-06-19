import React, { useState } from 'react'; // ✅ <-- FIXED
import { Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Login from './components/Login';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const updateUserDetails = (updatedUserDetails) => {
    setUserDetails(updatedUserDetails);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          userDetails ?
            <Navigate to="/dashboard" />
            :
            <AppLayout>
              <Home />
            </AppLayout>

        }
      />
      <Route
        path="/login"
        element={
          userDetails ?
            <Navigate to="/dashboard" />
            :
            <AppLayout>
              <Login updateUserDetails={updateUserDetails} />
            </AppLayout>

        }
      />
      <Route
        path="/dashboard"
        element={
          userDetails ?
            <Dashboard />
            :
            <Navigate to="/login" />

        }
      />
    </Routes>
  );
}

export default App;
