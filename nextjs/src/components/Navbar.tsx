'use client';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoMdSync } from 'react-icons/io';
import { CgLogOut } from 'react-icons/cg';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function NavBar() {

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
            onClick={() => signOut()}>
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
