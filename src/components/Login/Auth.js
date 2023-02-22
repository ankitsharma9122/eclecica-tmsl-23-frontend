import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

const Auth = () => {
  const [tabValue,settabValue]=useState(0);
  return (
    <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap",marginTop:"160px",justifyContent:"center"}}> 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><h3 style={{textAlign:"center"}}> For publishing a Blog you need to login to Eclectica </h3></div>
    {tabValue==0 && <Signup tabValue={tabValue} settabValue={settabValue}/>}
    {tabValue==1 && <Login tabValue={tabValue} settabValue={settabValue}/>}
    {tabValue==2 && <ForgotPassword tabValue={tabValue} settabValue={settabValue}/>}
    </div>
  );
};

export default Auth;
