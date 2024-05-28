import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

 

export default function About() {
  return (
    <Box id='about' sx={{ 
      width: '100%',
      bgcolor: 'background.paper',
      zIndex: 1000, 
      top: '200%', 
      position: 'absolute', 
      color:'black', 
      fontSize: '70px', 
      backgroundColor: 'white', 
      textAlign: 'center',
      paddingBottom: '290px'
      }}>
      <Typography
        variant="h4"
      >
        About Us  
      </Typography>
      <button>Contact Us</button>
    </Box>
  );
}