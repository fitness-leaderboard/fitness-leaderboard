import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { ChallengeList } from '@/components/Challenges/ChallengeList';
import { BadgeList } from '@/components/Badges/BadgeList';
import '@css/list.css';

export default function Challenges() {

  return (
      <Grid container padding={10} spacing={10}>
        <Grid item xs={12}>
          <Typography variant='subtitle1' fontWeight='light'>Challenges</Typography>  
          <Typography variant='h4'>Join a Challenge</Typography>  
        </Grid>
        <Grid item xs={12}>  
          <Paper elevation={4} sx={{padding: 1, backgroundColor: '#FAFAFA'}}>
            <ChallengeList />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4'>Your Badges</Typography>
          <BadgeList/>
        </Grid>

      </Grid>
  )
}