import React, {useContext} from 'react';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { DataContext } from '../context/DataContext';
import { TokenNameContext } from '../context/TokenNameContext';

const StatsSection = () => {
  const [output, setOutput] = useContext(DataContext)
  const [tokenName, setTokenName] = useContext(TokenNameContext)
  return <div>
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" color='primary'  startIcon={<StarOutlineIcon />}>
        Add To WatchList
      </Button>
      </Stack>
      <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
      <Box>
          <Typography color='#ffffff' align='center'>Price</Typography>
          <Typography color='#ffffff' align='center'>{output[tokenName].price}</Typography>
          <Box sx={{display:'flex'}}>
              <Box sx={{marginRight:15}}>
              <Typography color='#ffffff'>24H</Typography>
              <Typography color='#ffffff'>{output[tokenName]["1d"].price_change_pct}%</Typography>
              <Typography color='#ffffff'>LP</Typography>
              <Typography color='#ffffff'>LP here</Typography>
              <Typography color='#ffffff'>Buy/Sell fee</Typography>
              <Typography color='#ffffff'>b/s here</Typography>
              </Box>
              <Box>
              <Typography color='#ffffff'>1W</Typography>
              <Typography color='#ffffff'>{output[tokenName]["7d"].price_change_pct}%</Typography>
              <Typography color='#ffffff'>Market cap</Typography>
              <Typography color='#ffffff'>{output[tokenName].market_cap }</Typography>
              <Typography color='#ffffff'>Holders</Typography>
              <Typography color='#ffffff'> {output[tokenName].num_pairs}</Typography>
              </Box>

          </Box>
     </Box>
     <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
     <Box sx={{display:'flex'}}>
              <Box sx={{marginRight:15}}>
              <Typography color='#ffffff'>{output[tokenName].high}</Typography>
              <Typography color='#ffffff'>{output[tokenName].high_timestamp}</Typography>
              <Typography color='#ffffff'>All time High LP</Typography>
              <Typography color='#ffffff'>date here</Typography>
              
              </Box>
              <Box>
              <Typography color='#ffffff'>ATH Price</Typography>
              <Typography color='#ffffff'>24H price change</Typography>
              <Typography color='#ffffff'>ATHLP</Typography>
              <Typography color='#ffffff'>price here</Typography>
              
              </Box>

          </Box>
          <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
          <Box sx={{display:'flex'}}>
              <Box sx={{marginRight:10}}>
              <Typography color='#ffffff'>telegram members</Typography>
              <Typography color='#ffffff'>twitter followers</Typography>
              </Box>
              <Box>
              <Typography color='#ffffff'>No here</Typography>
              <Typography color='#ffffff'>No here</Typography>
              </Box>

          </Box>
          <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Button variant="outlined" color='primary'  startIcon={<StarOutlineIcon />}>
              CHECK CONTRACT
            </Button>
            <Button variant="outlined" color='primary' startIcon={<StarOutlineIcon />}>
              Chart on Booged.finance
            </Button>
            <Button variant="outlined" color='primary'  startIcon={<StarOutlineIcon />}>
              Trade on poocoin.app
            </Button>
            <Button variant="outlined" color='primary'  startIcon={<StarOutlineIcon />}>
              Trade on PancakeSwap
            </Button>
      </Stack>
      <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
  </div>;
};

export default StatsSection;

