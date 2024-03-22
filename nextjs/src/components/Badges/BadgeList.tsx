import { List } from '@mui/material';
import { RankedBadge } from '@components/Badges/RankedBadges';
import React from 'react';
import '@css/list.css';

export const BadgeList = () => {
  return (
    <List className='hslist'>
      <RankedBadge
        name='Running Test'
        type='running'
        description='Half Marathon'
        color='red'
        size={100}
      />
      <RankedBadge
        name='Cycling Marathon'
        type='biking'
        description='Tour Le France'
        color='blue'
        size={100}
      />
      <RankedBadge
        name='Swimming Training'
        type='swimming'
        description='Three Laps'
        color='green'
        size={100}
      />
    </List>
  );
};

export default BadgeList;
