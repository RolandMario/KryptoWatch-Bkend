import {Box, Grid} from '@mui/material'
import TopBar from './components/NavBar/TopBar';
import SideMenu from './components/sideBar/SideMenu';
import { CssBaseline } from '@mui/material';
import Content from './components/tokenContent/content';
import pic1 from './assets/pic11111.gif'
import pic2 from './assets/pic22.gif'
import React, {useContext, useState} from 'react';
import { DcContext } from './components/context/DComponents';
import * as DynamicComponents from './components/importComponents/DynamicComponents'
function App() {
  const [dcData, setDcData] = useContext(DcContext);
  console.log('active component',dcData)
  const renderDynamicComponents = ()=>{
    const Com = DynamicComponents[dcData];
    return <Com/>
}
  return (
    
    <div className='bg'>
      
      <CssBaseline/>
      <Grid container direction='column' >
            <Grid item xs={12}>
              <TopBar/>
            </Grid>
        <Grid container item direction='row'  xs={12}>
        
            <Grid item xs={2} >
              <SideMenu/>
            </Grid>
        <Grid container item  md={12} lg={12} xl={10} sx={{marginTop:9}}>
            <Grid item md={12} lg={6} >
             <img src={pic2} alt='Advertisement'/>
            </Grid>
            <Grid item  md={12} lg={6} >
            <img src={pic1} alt='Advertisement'/>
            </Grid>
           
            <Grid item md={12} lg={10} >

              <Box sx={{color:'#ffffff', fontSize: 30, fontWeight:900}} >Promoted Coins</Box>
              
              {/* <Content/> */}
              {renderDynamicComponents()}
            </Grid>
        </Grid>
          <Grid item xs={12}>
              <h1> Footer</h1>
            </Grid>
          </Grid> 
        
            
      </Grid>
    
    </div>
    
  );
}

export default App;
