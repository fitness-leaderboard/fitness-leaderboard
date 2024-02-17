'use client';
import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { FaSyncAlt } from 'react-icons/fa';
import Link from 'next/link';

const Header = styled.header`
  height: 60px;
  padding: 0 15px 0 15px;
  position: fixed;
  top: 0;
  transition: width 250ms;
  transition-delay: 250ms;
  z-index: 60;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  width: calc(100% - 273px);
`;

const HeaderNav = styled.div`
  display: flex;
`;

const HeaderNavItem = styled.div`
  position: relative;
  position: relative;
`;

const HeaderNavLink = styled(Link)`
  width: 50px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  margin: 0;
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;
`;

export default function NavBar() {
  return (
    <Header>
      <div>Back</div>
      <HeaderNav>
        <HeaderNavItem>
          <HeaderNavLink href='#'>
            <FaSyncAlt />
          </HeaderNavLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderNavLink href='/profile'>
            <CgProfile />
          </HeaderNavLink>
        </HeaderNavItem>
      </HeaderNav>
    </Header>
  );
}
