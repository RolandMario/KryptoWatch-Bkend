import  Typography  from '@mui/material/Typography';
import React,{useContext} from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField';

const Banner = () => {
    
  return <>
   <Paper variant="outlined" sx={{backgroundColor:'#222b45'}} elevation={20}>
        <Box>
            <Typography color='#ffffff' sx={{fontSize: 30}}>Customize your banner advertisement campaign!</Typography>
        </Box>
        <Box sx={{color:'#ffffff', marginTop: 5, fontSize: 18}}>
            <Typography color='#ffffff' sx={{fontSize: 18}}>
            Follow these few steps and start your banner advertisement in less than 5 minutes!
            Your banner will be show on top of almost every page guaranteeing 50.000+ views per week!
            </Typography>
            <ol>
              <li>Upload your banner</li>
              <ul>
                <li>Accepted formats: JPG, JPEG, PNG, GIF</li>
                <li>Size up to 5MB</li>
                <li>Optimal dimensions: 640x100 or 320x50 (aspect ratio 6.4:1)</li>
              </ul>
              <Box sx={{marginTop:5}}>
                
                  <input type='file' width='50px'/>
              </Box>
             <li>Set banner redirect URL</li>
                    <Box sx={{display: 'flex', marginTop:2}}>
                      <Typography color='#ffffff'>Target URL</Typography> 
                      <Typography color='red'>   (required)</Typography>
                      </Box>
                      
                      {/* <TextField label='' variant='outlined' fullWidth name='cost'  onChange=''  onBlur='' sx={{border:2, color:'#ffffff' }}/> */}
                      <input type= 'text' name='facebook' className= 'form-input' placeholder='target URl'/>
                 <Box sx={{marginTop: 5}}>
                 <li> Preview/Check banner</li>
                  </Box> 
                  <ul>
                    <li>The exact same banner will be shown!</li>
                    <li>Check that the dimensions and link by clicking on the banners</li>
                  </ul> 
                  <Box sx={{display:'flex', flexDirection:'column'}}>
                    <img src='' width='200px' height='30px'/>
                    <img src='' width='100px' height='30px'/>
                  </Box>
                <li>Contact E-mail</li> 
                <ul>
                    <li>Please give us a contact address where we can reach you.</li>
                    <li>Check that the dimensions and link by clicking on the banners</li>
                    <li>We may only contact you regarding this advertisement.</li>
                </ul>
                <Box sx={{display: 'flex', marginTop:2}}>
                      <Typography color='#ffffff'>E-mail Address</Typography> 
                      <Typography color='red'>   (required)</Typography>
                      </Box>
                      <input type= 'text' name='facebook' className= 'form-input' placeholder='E-mail Address'/>
                      {/* <TextField label='' variant='outlined' fullWidth name='cost'  onChange=''  onBlur='' sx={{border:2, color:'#ffffff'}} />        */}
            <li>Select banner campaign duration</li>
                <ul>
                    <li>You get a total 5-35% price discount as the duration increases!</li>
                    <li>Your promotion price is guaranteed for the whole duration! Future prices increases won't affect you in any way.</li>
                    
                </ul>
            </ol>
        </Box>
    </Paper>
  </>;
};

export default Banner;
