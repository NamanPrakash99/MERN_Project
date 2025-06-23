import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Login from './components/Login';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import axios from 'axios';
import Error from './pages/Error';
import Logout from './pages/Logout';

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const updateUserDetails = (updatedUserDetails) => {
    setUserDetails(updatedUserDetails);
  };

  const isUserLoggedIn = async () => {
    const response = await axios.post(' http://localhost:5001/auth/is-user-logged-in', {}, {
      withCredentials: true
    });
    updateUserDetails(response.data.user);
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  const logout = async () => {
    try {
      await axios.post('http://localhost:5001/auth/logout', {}, {
        withCredentials: true
      });
      updateUserDetails(null);
      navigate('/login');
    } catch (err) {
      console.error("Logout failed", err);
    }
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
            <Dashboard logout={logout} />
            :
            <Navigate to="/login" />
        }
      />
      <Route path="/logout" element={userDetails ?
      <Logout updateUserDetails={updateUserDetails} /> :
      <Navigate to="/login" />} />

      <Route path="/error" element={userDetails ?
      <Error /> :
      <AppLayout><Error /></AppLayout>} />

    </Routes>
  );
}
export default App;