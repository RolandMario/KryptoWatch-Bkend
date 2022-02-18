import React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import CoinTabs from './CoinTabs';
const SubmitCoin = () => {
  return <div>
      <Grid container>
          <Grid item md={0} lg={1}>

          </Grid>
          <Grid item md={12} lg={8}>
                 <Paper variant="outlined" sx={{backgroundColor:'#151a30'}} >
                <Typography color='#ffffff' sx={{fontSize: 50, fontWeight: 700, textAlign: 'center'}}>Submit Project</Typography>
                <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
                <Typography color='#ffffff' sx={{fontSize: 30, fontWeight: 700, textAlign: 'center'}}>Select Project Type</Typography>
                <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
                <CoinTabs/>
                </Paper>
          </Grid>
          <Grid item md={0} lg={1}>

          </Grid>
       
      </Grid>
      
      
  </div>;
};

export default SubmitCoin;
