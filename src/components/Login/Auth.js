import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

const Auth = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap",marginTop:"160px",justifyContent:"center"}}> 
     <Signup/>
    </div>
  );
};

export default Auth;
