'use client'

import React from "react";
import { GenericBadge } from "@components/Badges/GenericBadges";
import { BadgeRank, BadgeType } from "@lib/types";


export type BadgeProps = {
  name: string;
  description: string;
  rank?: BadgeRank;
  type: BadgeType;
  date?: string;
  clickable?: boolean;
  image?: string;
  borderImage?: string;
  size: number;
  color?: string;
  children?: React.ReactNode;
};

// RunningBadge component
const RunningBadge : React.FC<BadgeProps> = (props) => {
  return (
    <GenericBadge color = 'orangered' image = './badges/runningbadge.png' {...props} />
  )
};

// WalkingBadge component
const WalkingBadge : React.FC<BadgeProps> = (props) => {
  return (
    <GenericBadge color = 'purple' image = './badges/walkingbadge.png' {...props} />
  )
  };

// HikingBadge component
const HikingBadge : React.FC<BadgeProps> = (props) => {
  return (
    <GenericBadge color = 'green' image = './badges/hikingbadge.png' {...props} />
  )
};

// SwimmingBadge component
const SwimmingBadge : React.FC<BadgeProps> = (props) => {
  return (
    <GenericBadge color = 'blue' image = './badges/swimmingbadge.png' {...props} />
  )
};

// BikingBadge component
const BikingBadge : React.FC<BadgeProps> = (props) => {
  return (
    <GenericBadge color = 'orange' image = './badges/bikingbadge.png' {...props} />
  )
};

// SleepingBadge component
const SleepingBadge : React.FC<BadgeProps> = (props) => {
  return (
    <GenericBadge color = 'purple' image = './badges/sleepingbadge.png' {...props} />
  )
};

// HealthBadge component
const HealthBadge : React.FC<BadgeProps> = (props) => {
  return (
    <GenericBadge color = 'pink' image = './badges/healthbadge.png' {...props} />
  )
};


export const Badge : React.FC<BadgeProps> = (props) => {
  let BadgeComponent : React.FC<BadgeProps>
  switch ( props.type) {
    case 'running':
      BadgeComponent =  RunningBadge;
      break;
    case 'walking':
      BadgeComponent = WalkingBadge;
      break;
    case 'hiking':
      BadgeComponent = HikingBadge;
      break;
    case 'biking':
      BadgeComponent = BikingBadge;
      break;
    case 'swimming':
      BadgeComponent = SwimmingBadge;
      break;
    case 'sleeping':
      BadgeComponent = SleepingBadge;
      break;
    case 'health':
      BadgeComponent = HealthBadge;
      break;
    default:
        BadgeComponent = GenericBadge;
    }
  return (
    <div>
      <BadgeComponent {...props} />
    </div>  
  );
};