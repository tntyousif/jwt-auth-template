// App.jsx

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm' 
import SigninForm from './components/SigninForm/SigninForm'


const App = () => {
  const [user, setUser] = useState(null);

  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} /> // pass the logout functionality to the navbar
      
      <Routes>
      {
        user ?
          <Route path="/" element={<Dashboard user={user} />} />
        :
          <Route path="/" element={<Landing />} />
      }

        <Route path='/signup' element={<SignupForm setUser={setUser} />} />
        <Route path='/signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default App;