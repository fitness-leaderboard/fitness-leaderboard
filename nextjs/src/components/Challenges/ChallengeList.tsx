import { Card, CardContent, Typography, List, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import '@css/list.css';


export const ChallengeList = () => {
  const challenges: { id: number; name: string; description: string; activityTypeId: number; createdAt: Date; startDate: Date; endDate: Date; badgeId: number; }[] = [];

  for (let i = 0; i < 100; i++) {
    const challenge = {
      id: i + 1,
      name: `Challenge ${i + 1}`,
      description: `Description for Challenge ${i + 1}`,
      activityTypeId: Math.floor(Math.random() * 10) + 1,
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
        <Card key={index} sx={{minHeight: 300, minWidth: 250, margin: '10px', borderRadius: '5%' }}>
          <CardContent>
            <Typography variant='h5' component='div' justifyContent= {'center'}>
              {challenge.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {challenge.description}
            </Typography>
            <Button variant='contained' color='primary'>
              <Link href={`/challenges/${challenge.name}`}>
                <Typography color='text.secondary'>Join</Typography>
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default ChallengeList;
