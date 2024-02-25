import { Card, CardContent, Typography, List, Button, Box, Paper } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import '@css/list.css';

export const ChallengeList = () => {
  const activityImage = new Map<string, string>();
  activityImage.set('running', './badges/runningbadge.png');
  activityImage.set('walking', './badges/walkingbadge.png');
  activityImage.set('hiking', './badges/hikingbadge.png');
  activityImage.set('swimming', './badges/swimmingbadge.png');
  const images = Array.from(activityImage.values());

  const challenges: {
    id: number;
    name: string;
    description: string;
    activityTypeId: number;
    createdAt: Date;
    startDate: Date;
    endDate: Date;
    badgeId: number;
  }[] = [];

  for (let i = 0; i < 25; i++) {
    const challenge = {
      id: i + 1,
      name: `Challenge ${i + 1}`,
      description: `Description for Challenge ${i + 1}`,
      activityTypeId: Math.floor(Math.random() * 4),
      createdAt: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      badgeId: Math.floor(Math.random() * 10) + 1,
    };
    challenges.push(challenge);
  }

  return (
    <List className='hslist'>
      {challenges.map((challenge, index) => (
        <Card
          key={index}
          style={{
            alignItems: 'center',
            minHeight: 300,
            minWidth: 250,
            margin: '10px',
            borderRadius: '5%',
            display: 'flex'
          }}>
          <CardContent sx={{ margin: 'auto' }}>
            <Typography variant='h5' component='div'>
              {challenge.name}
            </Typography>
            <Box
              sx={{
                width: 200,
                height: 150,
                backgroundImage: `url(${images[challenge.activityTypeId]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Typography variant='body2' color='text.secondary'>
              {challenge.description}
            </Typography>
              <Link href={`/challenges/${challenge.name}`}>
                <Typography color='primary'>Join</Typography>
              </Link>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default ChallengeList;
