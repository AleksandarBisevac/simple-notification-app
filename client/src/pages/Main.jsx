import React from 'react';
import { useAuthContext } from '../authContext/authContext';
import Card from '../components/card/Card';
import Navbar from '../components/navbar/Navbar';

const Main = () => {
  const { user } = useAuthContext();
  return (
    <div className='mainContainer'>
      <p className='username'>{user}</p>
      <Navbar />
      <Card />
    </div>
  );
};

export default Main;
