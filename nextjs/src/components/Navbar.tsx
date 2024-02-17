'use client';
import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { IoMdSync } from 'react-icons/io';
import { CgLogOut } from 'react-icons/cg';
import Link from 'next/link';
import axios from 'axios';

export default function NavBar() {
  const logOut = async () => {
    await axios.post('/api/logout');
    window.location.reload();
  };

  return (
    <header className='navbar-header'>
      <div>Close</div>
      <div className='navbar-header-nav'>
        <div className='navbar-header-nav-item'>
          <button
            className='navbar-header-nav-link'
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={logOut}>
            <CgLogOut />
          </button>
        </div>
        <div className='navbar-header-nav-item'>
          <Link
            className='navbar-header-nav-link'
            href='#'
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
            }}>
            <IoMdSync />
          </Link>
        </div>
        <div className='navbar-header-nav-item'>
          <Link
            className='navbar-header-nav-link'
            href='/profile'
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
            }}>
            <CgProfile />
          </Link>
        </div>
      </div>
    </header>
  );
}
