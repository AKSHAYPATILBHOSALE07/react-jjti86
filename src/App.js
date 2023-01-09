import React from 'react';
import './style.css';
import SignUpForm from './Components/Forms/SignUpForm';
import PostRequestHooks from './Components/PostRequestHooks';

export default function App() {
  return (
    <>
      <div>
        {/* <SignUpForm /> */}
        <PostRequestHooks />
      </div>
    </>
  );
}
