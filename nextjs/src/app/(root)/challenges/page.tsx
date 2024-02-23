import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { ChallengeList } from '@/components/Challenges/ChallengeList';
import { BadgeList } from '@/components/Badges/BadgeList';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ForestIcon from '@mui/icons-material/Forest';
import PoolIcon from '@mui/icons-material/Pool';

import '@css/list.css';

export default function Challenges() {
  return (
    <Grid container padding={10} spacing={5}>
      <Grid item xs={12}>
        <Typography variant='subtitle1' fontWeight='light'>
          Challenges
        </Typography>
        <Typography variant='h4'>Join a Challenge</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={4} sx={{ padding: 1, backgroundColor: '#FAFAFA' }}>
          <ChallengeList />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h4'>Current Challenges</Typography>
        <Box>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ForestIcon fontSize='large' />
            <DirectionsRunIcon fontSize='large' />
            <PoolIcon fontSize='large' />
          </div>
          <Typography variant='h5' align={'center'}>
            Start your first challenge!
          </Typography>
          <Typography variant='subtitle1' align={'center'} fontWeight='light'>
            Get fit using the power of friendly competition.
            <br />
            Join a challenge in your activity of choice or create your own by challenging your
            connections.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h4'>Your Badges</Typography>
        <BadgeList />
      </Grid>
    </Grid>
  );
}
