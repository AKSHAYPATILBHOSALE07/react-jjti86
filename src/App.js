import React from 'react';
import './style.css';
import SignUp from './Components/SignUp';
import Main from './Components/Main';
import Header from './Components/Header';
import ResponsiveAppBar from './Components/ResponsiveAppBar';

export default function App() {
  return (
    <>
      <div>
        <SignUp />
        {/* <Header />
        <Main /> */}
        <ResponsiveAppBar />
      </div>
    </>
  );
}
