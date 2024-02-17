'use client';
import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { IoMdSync } from 'react-icons/io';
import { CgLogOut } from 'react-icons/cg';
import Link from 'next/link';

export default function NavBar() {
  const logOut = () => {
    console.log('Logged out');
  };

  return (
    <header className='navbar-header'>
      <div>Close</div>
      <div className='navbar-header-nav'>
        <div className='navbar-header-nav-item'>
          <button className='navbar-header-nav-link' onClick={logOut}>
            <CgLogOut />
          </button>
        </div>
        <div className='navbar-header-nav-item'>
          <Link className='navbar-header-nav-link' href='#'>
            <IoMdSync />
          </Link>
        </div>
        <div className='navbar-header-nav-item'>
          <Link className='navbar-header-nav-link' href='/profile'>
            <CgProfile />
          </Link>
        </div>
      </div>
    </header>
  );
}
