import React from 'react';
import Grid from  '@mui/material/Grid'
import VoteSection from './VoteSection';
import StatsSection from './StatsSection';
const Vote = () => {
  return <div>
      <Grid container spacing={5}>
          <Grid item md={12} lg={9} >
            <VoteSection/>
          </Grid>
          <Grid item md={12} lg={3}>
            <StatsSection/>
          </Grid>
      </Grid>
  </div>;
};

export default Vote;
