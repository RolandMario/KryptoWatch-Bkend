import Typography from '@mui/material/Typography';
import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import  FormControl  from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel';
import { DataContext } from '../context/DataContext';

const SubmitNFT = () => {
    const [output, setOutput] = useContext(DataContext);
    const chains = [
        {
      logo: 'bg',
      name: 'Binance Smart Chain (BSC)'
    }
]
    const chain = ['Binance Smart Chain (BSC)', 'Ethereum(ETH)','Avalanche', 'Polygon(MATIC)', 'Fantom', 'Cronos', 'Solana']
  return <>
  <Box>
       <Typography color='#ffffff'>Upload NFT logo</Typography> 
      <Box sx={{display:'flex'}}>
          <Box >
              <img src='#' alt='logo'/>
              <Typography color='#ffffff'>Please Upload NFT logo</Typography> 
              <Typography color='#ffffff'>required</Typography> 
          </Box>
          <Box>
          <Typography color='#ffffff'>Optimal dimensions 512x512px, size up to 1MB</Typography> 
          <Button variant="contained" size='large' color='inherit' onClick={()=>{}}>upload</Button>
      
          </Box>

      </Box>  
      <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
      <Typography color='#ffffff' sx={{fontSize:'40', fontWeight: 700}}>Project information</Typography>
      <FormControl fullWidth style={{marginTop:15}} >
                  <InputLabel id="demo-simple-select-label" sx={{color:'#ffffff'}}>Select The Blockchain </InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //value={formik.values.category}
                      label="Category"
                      name='category'
                     // onChange={formik.handleChange}
                      //onBlur={formik.handleBlur}
                  >
                     { chain.map(chain=>(
                          <MenuItem value='Product' >{chain}</MenuItem>
                      ))}
                      
                      
                      
                  </Select>
                  <Box sx={{display: 'flex', marginTop:2}}>
                      <Typography color='#ffffff'>Contract Address</Typography> 
                  <Typography color='red'>   (required)</Typography>
                  </Box>
                  
                  <TextField label='' variant='outlined' name='cost' value='' onChange=''  onBlur='' />
                  <Box sx={{display: 'flex', marginTop:2}}>
                      <Typography color='#ffffff'>Name</Typography> 
                  <Typography color='red'>   (required)</Typography>
                  </Box>
                  
                  <TextField label='' variant='outlined' name='cost' value='' onChange=''  onBlur='' />
                  <Box sx={{ marginTop:2}}>
                      <Typography color='#ffffff'>Is this a Presale Project?</Typography>
                      <Box sx={{display: 'flex'}}>
                      <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                      >
                          <FormControlLabel value="Yes" control={<Radio />} label="Yes" sx={{color:'#ffffff'}}/>
                          <FormControlLabel value="No" control={<Radio />} label="No" sx={{color:'#ffffff'}}/>
                      </RadioGroup>

                      </Box>
                  </Box>
                  <Box sx={{ marginTop:2}}>
                      <Typography color='#ffffff'>Lunch Date</Typography>
                      <input type="datetime-local" id="birthdaytime" name="birthdaytime"/>
                  </Box>
                  <Box sx={{ marginTop:2}}>
                      <Typography color='#ffffff'>Description</Typography>
                      <TextField  variant='outlined' multiline row={20}  fullWidth/>
                  </Box>
                  <Box sx={{ marginTop:2}}>
                      <Typography color='#ffffff'>Market Place link</Typography>
                      <TextField  variant='outlined'  fullWidth/>
                  </Box>
                  <Box sx={{ marginTop:2}}>
                      <Typography color='#ffffff'>Website link</Typography>
                      <TextField  variant='outlined'  fullWidth/>
                  </Box>
                  <Box sx={{ marginTop:2}}>
                      <Typography color='#ffffff'>Telegram link</Typography>
                      <TextField  variant='outlined'  fullWidth/>
                  </Box>
                  <Box sx={{ marginTop:2}}>
                      <Typography color='#ffffff'>twitter link</Typography>
                      <TextField  variant='outlined'  fullWidth/>
                  </Box>
                  <Box sx={{ marginTop:2}}>
                      <Typography color='#ffffff'>Facebook link</Typography>
                      <TextField  variant='outlined'  fullWidth/>
                  </Box>
                  <Box sx={{ marginTop:2}}>
                      <Typography color='#ffffff'>Instagram link</Typography>
                      <TextField  variant='outlined'  fullWidth/>
                  </Box>
                  <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
                  <Typography color='#ffffff'>Please upload Logo</Typography>
                  <Stack spacing={2} sx={{ width: '100%' }}>
                      <Button variant="contained" >
                          Submit Token
                      </Button>
                  </Stack>
                  </FormControl> 
  </Box>

</>;
};

export default SubmitNFT;
