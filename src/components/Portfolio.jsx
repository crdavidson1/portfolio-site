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
import { Link as LinkScroll } from 'react-scroll/modules';

 

export default function Portfolio() {
  return (
    <Box id='portfolio' sx={{ 
      width: '100%',
      bgcolor: 'background.paper',
      zIndex: 1000, 
      top: '200%', 
      position: 'absolute', 
      color:'black', 
      fontSize: '70px', 
      backgroundColor: 'white', 
      textAlign: 'center',
      paddingBottom: '290px',
      height: '100%'
      }}>
      <Typography
        variant="h4"
      >
        Portfolio  
      </Typography>
        <List>
            <ListItem key={'Example 1'} disablePadding>
            <Link to={`/portfolio/1`} style={{ width: '100%', display: 'block' }}>
            <ListItemButton >
                {/* <ListItemAvatar>
                <Avatar src={article.article_img_url} />
                </ListItemAvatar> */}
                <ListItemText
                primary={'Example 1'}
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
            <ListItem key={'Example 2'} disablePadding>
            <Link to={`/portfolio/2`} style={{ width: '100%', display: 'block' }}>
            <ListItemButton >
                {/* <ListItemAvatar>
                <Avatar src={article.article_img_url} />
                </ListItemAvatar> */}
                <ListItemText
                primary={'Example 2'}
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
            <ListItem key={'Example 3'} disablePadding>
            <Link to={`/portfolio/3`} style={{ width: '100%', display: 'block' }}>
            <ListItemButton >
                {/* <ListItemAvatar>
                <Avatar src={article.article_img_url} />
                </ListItemAvatar> */}
                <ListItemText
                primary={'Example 3'}
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
            <ListItem key={'Example 4'} disablePadding>
            <Link to={`/portfolio/4`} style={{ width: '100%', display: 'block' }}>
            <ListItemButton >
                {/* <ListItemAvatar>
                <Avatar src={article.article_img_url} />
                </ListItemAvatar> */}
                <ListItemText
                primary={'Example 4'}
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
            <ListItem key={'Example 5'} disablePadding>
            <Link to={`/portfolio/5`} style={{ width: '100%', display: 'block' }}>
            <ListItemButton >
                {/* <ListItemAvatar>
                <Avatar src={article.article_img_url} />
                </ListItemAvatar> */}
                <ListItemText
                primary={'Example 5'}
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
            <ListItem key={'Example 6'} disablePadding>
            <Link to={`/portfolio/6`} style={{ width: '100%', display: 'block' }}>
            <ListItemButton >
                {/* <ListItemAvatar>
                <Avatar src={article.article_img_url} />
                </ListItemAvatar> */}
                <ListItemText
                primary={'Example 6'}
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
        <LinkScroll to='about-us' smooth>
            <button style={{marginBottom: '5%', fontSize: '30px'}}>About us</button>
        </LinkScroll>
    </Box>
  );
}