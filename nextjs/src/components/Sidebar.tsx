'use client';
import React from 'react';
import Image from 'next/image';
import { RiDashboard2Fill } from 'react-icons/ri';
import { FaFistRaised } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';

export default function Sidebar() {
  return (
    <nav className={'sidebar-wrapper'}>
      <Link href={'/'} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Image
          style={{ padding: 20 }}
          src={'./next.svg'}
          alt={'Vercel Logo'}
          width={200}
          height={200}
        />
      </Link>
      <div className={'sidebar-list-wrapper'}>
        <ul className={'sidebar-list'}>
          {sidebarLinks.map(link => {
            return (
              <li key={link.key} className={'sidebar-item'}>
                <Link className={'sidebar-link'} href={link.route}>
                  <Image src={link.icon} alt={link.label} width={30} height={30} />
                  <span className='sidebar-link-text'>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
