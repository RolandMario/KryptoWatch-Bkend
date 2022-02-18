import Stack  from '@mui/material/Stack';
import React, {useContext} from 'react';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box'
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Divider } from '@mui/material';
import Paper from '@mui/material/Paper'
import Chart from './chart'
import { DataContext } from '../context/DataContext';
import { TokenNameContext } from '../context/TokenNameContext';

const VoteSection = () => {
    const [output, setOutput] = useContext(DataContext)
  const [tokenName, setTokenName] = useContext(TokenNameContext)
  return <div>
      
      <Box sx={{display:'flex', color:'#ffffff', justifyContent:'space-between'}}>
          <Typography sx={{fontSize:40}}>{output[tokenName].name}</Typography>
          <Stack sx={{display:'flex'}}>
              <ShareIcon/><Typography>Share:</Typography>
              <FacebookIcon/>
              <TwitterIcon/>
              <InstagramIcon/>
          </Stack>
      </Box>
      <Divider color='#ffffff' sx={{marginBottom:5}}/>
      <Box sx={{display:'flex', color:'#ffffff', fonrSize:26, fontWeight:700, marginRight:3}} spacing={2}>
          <Typography>Votes:</Typography>
          <Button variant='outlined'>123</Button>
          <Typography> Today's Votes:</Typography>
          <Button variant='outlined'>10</Button>
      </Box>
      <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
      <Box>
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="contained"  startIcon={<ShareIcon />}>
        Share
    </Button>
    <Button variant="contained" color='success' size ='fullwidth' startIcon={<ShareIcon />}>
        Share
    </Button>
    <Button variant="contained" color='warning' size ='fullwidth' startIcon={<ShareIcon />}>
        Share
    </Button>
    
    </Stack>
      </Box>
      <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
      <Typography color='#ffffff'>
          Comyz Coin is a decentralized token, designed to be simple and useful to the community.
           Buy, sell, sent and receive for free,
            no taxes, no fees and no limits from our side.
      </Typography>
      <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
      <Box>
        <Chart/>
      </Box>
  </div>;
};

export default VoteSection;
