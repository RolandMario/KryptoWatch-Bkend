import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { styled, alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import React,{useContext} from 'react';
import {DcContext} from '../context/DComponents'
const TopBar = () => {
  const [dcData, setDcData] = useContext(DcContext)
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
      const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return <div>
      <AppBar sx={{backgroundColor: '#151a30'}}>
          <Toolbar>
          <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
             <Box>
                <IconButton color='inherit'>
                <DehazeIcon />
              </IconButton>
              </Box>
             <Box sx={{display:'flex'}}>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search> 
            <Button variant="outlined" size='large' color='inherit' onClick={()=>{setDcData('SubmitCoin')}}>Submit Coin</Button>
            </Box>
            <Box>
            <Stack direction="row" spacing={2}>
                <Item>BTC</Item>
                <Item>ETH</Item>
                <Item>AVAX</Item>
            </Stack>
            </Box>
            
          </Box>
          </Toolbar>
          
      </AppBar>
  </div>
};

export default TopBar;
