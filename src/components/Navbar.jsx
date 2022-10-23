import { AppBar, Box, InputBase, styled, Toolbar, Typography,Badge,Avatar,Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import {theme} from '../theme';
import Mail from '@mui/icons-material/Mail'
import Notification from '@mui/icons-material/Notifications'

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})
const Search =styled("div")({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
})

const Icons = styled(Box)(({theme})=>({
 display:"none",//its xm : extra small
 alignItems:"center",
 gap:"20px", 
 [theme.breakpoints.up("sm")]:{//from sm to bigger
  display:"flex",
 }
}));

const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px", 
  [theme.breakpoints.up("sm")]:{//from sm to bigger
    display:"none",
   }
 }));
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>My Gallery</Typography>
        <ImageIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder='search..'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail  />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notification  />
          </Badge>
          <Avatar 
            sx={{width:30,height:30}} 
            src="https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=600" 
            onClick={e=>setOpen(true)}          
           />
        </Icons>
        <UserBox>
          <Avatar 
            sx={{width:30,height:30}} 
            src="https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=600" 
            onClick={e=>setOpen(true)}
            />
          <Typography variant="span">
            John
          </Typography>
        </UserBox>
      </StyledToolbar> 
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar