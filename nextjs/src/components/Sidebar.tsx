'use client';
import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.nav`
  flex-basis: auto;
  flex-shrink: 0;
  transition-delay: 0.25s;
  width: 273px;
  background: #1a1a1a;
  color: #fff;
  transition: width 250ms ease;
  min-height: 100vh;
  overflow: hidden;
`;

const SidebarListWrapper = styled.div`
  font-weight: 100;
  overflow: auto;
  height: calc(100vh - 75px);
  padding-top: 15px;
  position: fixed;
  top: 60px;
  width: 273px;
  box-sizing: border-box;
  color: #fff;
`;

const SidebarList = styled.ul`
  margin: 0 0 15px;
  list-style: none;
  padding: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #000;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const SidebarItem = styled.li`
  margin-top: 1px;
  transition: background-color 400ms ease-out;
  white-space: nowrap;
  transition-delay: 250ms;
  line-height: 22px;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
  width: 100%;
`;

const SideLink = styled.a`
  display: flex;
  padding: 8px 15px 8px 20px;
  color: white;
`;

const SideLinkText = styled.span`
  transition: opacity 500ms, max-height 800ms;
  font-size: 16px;
  flex-grow: 1;
  padding-right: 10px;
  max-height: 200px;
  transition-delay: 250ms;
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarListWrapper>
        <SidebarList>
          <SidebarItem>
            <SideLink href='/challenges'>
              <SideLinkText>Challenges</SideLinkText>
            </SideLink>
          </SidebarItem>
          <SidebarItem>
            <SideLink href='/leaderboard'>
              <SideLinkText>Leaderboard</SideLinkText>
            </SideLink>
          </SidebarItem>
          <SidebarItem>
            <SideLink>
              <SideLinkText>Link1</SideLinkText>
            </SideLink>
          </SidebarItem>
          <SidebarItem>
            <SideLink>
              <SideLinkText>Link1</SideLinkText>
            </SideLink>
          </SidebarItem>
          <SidebarItem>
            <SideLink>
              <SideLinkText>Link1</SideLinkText>
            </SideLink>
          </SidebarItem>
          <SidebarItem>
            <SideLink>
              <SideLinkText>Link1</SideLinkText>
            </SideLink>
          </SidebarItem>
          <SidebarItem>
            <SideLink>
              <SideLinkText>Link1</SideLinkText>
            </SideLink>
          </SidebarItem>
          <SidebarItem>
            <SideLink>
              <SideLinkText>Link1</SideLinkText>
            </SideLink>
          </SidebarItem>
        </SidebarList>
      </SidebarListWrapper>
    </SidebarWrapper>
  );
}
