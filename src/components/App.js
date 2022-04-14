import React from 'react';
import Signup from './Signup';
import Dashboard from './Dashboard';
import RequireAuth from './RequireAuth';
import Login from './Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
function App() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                path='/'
                element={
                  <RequireAuth redirectTo='/login'>
                    <Dashboard />
                  </RequireAuth>
                }
              ></Route>
              <Route
                path='/update-profile'
                element={
                  <RequireAuth redirectTo='/login'>
                    <UpdateProfile />
                  </RequireAuth>
                }
              ></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/forgot-password' element={<ForgotPassword />}></Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
