import React from 'react';
import './navbar.css';
import { IoNotifications, IoSettingsSharp } from 'react-icons/io5';
import { RiMessage2Fill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>chat</span>
      <div className='icons'>
        <div className='icon'>
          <IoNotifications fill='white' size={20} />
          <div className='counter'>2</div>
        </div>
        <div className='icon'>
          <RiMessage2Fill fill='white' size={20} />
          <div className='counter'>2</div>
        </div>
        <div className='icon'>
          <IoSettingsSharp fill='white' size={20} />
          <div className='counter'>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
