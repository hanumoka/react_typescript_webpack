import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LogIn from '@pages/Login';
import SignUp from '@pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
