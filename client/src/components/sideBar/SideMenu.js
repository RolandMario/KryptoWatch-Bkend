import React,{useState, useEffect, useContext} from 'react';
import { Drawer, IconButton} from '@mui/material';
import List  from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Toolbar from '@mui/material/Toolbar'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { menuListItems } from './menuListItems';
import {DcContext} from '../context/DComponents'

const SideMenu = () => {
  const [dcData, setDcData] = useContext(DcContext)
  //control drawer
  const  [drawerVariant, setDrawerVariant] = useState('permanent');
  const [mobileOpen, setMobileOpen] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xl'));
  const handleMobileClose =()=>{
    //if(matches===false){
        setDrawerVariant('temporary');
        setMobileOpen(false)  
    // }
}
useEffect(()=>{
       
  if(matches===false){
      setDrawerVariant('temporary');
      setMobileOpen(false)
  }else if(matches===true){
      setDrawerVariant('permanent');
      setMobileOpen(true)
  }

},[matches])
  return <div>
     < Drawer variant={drawerVariant} open={mobileOpen}
        anchor='left'
        sx={{'& .MuiDrawer-paper':{width:'20%', maxWidth:300, marginTop:9, backgroundColor: '#151a30'}}} 
        
     >
    <List>
      <Toolbar sx={{display:'flex', justifyContent: 'flex-end'}} onClick={handleMobileClose}>
          <IconButton><KeyboardBackspaceIcon sx={{color:'#ffffff'}}/></IconButton>
      </Toolbar>
      {menuListItems?.map(item=>(
        <ListItem key={item.id}>
          <IconButton onClick={()=>{setDcData(item.route)}}>
              <ListItemIcon>
               {/* <AddLocationAltIcon sx={{color:'#ffffff'}}/> */}
               {item.icon}
             </ListItemIcon>
            <ListItemText sx={{color:'#ffffff'}} > {item.label}</ListItemText>
          </IconButton>
      
        </ListItem>
      ))}
        
      </List>
     </Drawer>
  </div>;
};

export default SideMenu;
