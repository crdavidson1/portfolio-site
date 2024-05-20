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

 

export default function Services() {
  return (
    <Box sx={{ 
      width: '100%',
      bgcolor: 'background.paper',
      zIndex: 1000, 
      top: '100%', 
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
        Services  
      </Typography>
        <List>
            <ListItem key={'Service 1'} disablePadding>
            <Link to={`/services/1`} style={{ width: '100%', display: 'block' }}>
            <ListItemButton >
                {/* <ListItemAvatar>
                <Avatar src={article.article_img_url} />
                </ListItemAvatar> */}
                <ListItemText
                primary={'Service 1'}
                secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="text.primary"
                >
                    Brief Outline
                </Typography>
                <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                >
                    <br></br> 
                    Tech Stack
                </Typography>
                <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                >
                    <br></br>
                    Example
                </Typography>
                </React.Fragment>
                }
                />
            </ListItemButton>
            </Link> 
            </ListItem>
            <ListItem key={'Service 2'} disablePadding>
            <Link to={`/services/2`} style={{ width: '100%', display: 'block' }}>
            <ListItemButton >
                {/* <ListItemAvatar>
                <Avatar src={article.article_img_url} />
                </ListItemAvatar> */}
                <ListItemText
                primary={'Service 2'}
                secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="text.primary"
                >
                    Brief Outline
                </Typography>
                <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                >
                    <br></br> 
                    Tech Stack
                </Typography>
                <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                >
                    <br></br>
                    Example
                </Typography>
                </React.Fragment>
                }
                />
            </ListItemButton>
            </Link> 
            </ListItem>
            <ListItem key={'Service 3'} disablePadding>
            <Link to={`/services/3`} style={{ width: '100%', display: 'block' }}>
            <ListItemButton >
                {/* <ListItemAvatar>
                <Avatar src={article.article_img_url} />
                </ListItemAvatar> */}
                <ListItemText
                primary={'Service 3'}
                secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="text.primary"
                >
                    Brief Outline
                </Typography>
                <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                >
                    <br></br> 
                    Tech Stack
                </Typography>
                <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                >
                    <br></br>
                    Example
                </Typography>
                </React.Fragment>
                }
                />
            </ListItemButton>
            </Link> 
            </ListItem>
        </List>
    </Box>
  );
}