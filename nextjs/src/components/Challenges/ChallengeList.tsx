import { Card, CardContent, Typography, List, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import '@css/list.css';

export const ChallengeList = () => {
  return (
    <List className='hslist'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card, index) => (
        <Card key={index} sx={{minHeight: 300, minWidth: 250, margin: '10px', borderRadius: '5%' }}>
          <CardContent>
            <Typography variant='h5' component='div' justifyContent= {'center'}>
              {card}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              This is some information about {card}.
            </Typography>
            <Button variant='contained' color='primary'>
              <Link href={`/challenges/${index}`}>
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
