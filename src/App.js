import React from 'react';
import './style.css';
import SignUp from './Components/SignUp';
import Main from './Components/Main';
import Header from './Components/Header';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Forms/Login';

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <SignUp />
    </>
  );
}
