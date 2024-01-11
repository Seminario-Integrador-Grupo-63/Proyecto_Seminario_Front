import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StyleIcon from '@mui/icons-material/Style';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TableBarIcon from '@mui/icons-material/TableBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {theme} from '@/Common/Theme//themes'
import Link from 'next/link';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */

    window?: () => Window;
}

export const Layout = (props: any) => {
    const { window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [title, setTitle] = useState('Title')
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const onOrders = () => {
        setTitle('Ordenes')
    }

    const onTables = () => {
        setTitle('Mesas')
    }

    const onFoodMenu = () => {
        setTitle('Carta')
    }

    const onUsers = () => {
        setTitle('Usuarios')
    }
  
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem key={"orders"}>
                    <Link href="/orders" style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={onOrders}>
                            <ListItemIcon style={{ color: theme.palette.primary.main }}>
                                {<StyleIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography 
                                        variant="inherit" 
                                        color="textPrimary">
                                        Ordenes
                                    </Typography>}/>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem key={"tables"}>
                    <Link href="/tables" style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={onTables}>
                            <ListItemIcon style={{ color: theme.palette.primary.main }}>
                                {<TableBarIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography 
                                        variant="inherit" 
                                        color="textPrimary">
                                        Mesas
                                    </Typography>}/>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem key={"food-menu"}>
                    <Link href="/foodmenu" style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={onFoodMenu}>
                            <ListItemIcon style={{ color: theme.palette.primary.main }}>
                                {<FastfoodIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography 
                                        variant="inherit" 
                                        color="textPrimary">
                                        Carta
                                    </Typography>}/>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem key={"users"}>
                    <Link href="/users" style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={onUsers}>
                            <ListItemIcon style={{ color: theme.palette.primary.main }}>
                                {<AccountCircleIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography 
                                        variant="inherit" 
                                        color="textPrimary">
                                        Usuarios
                                    </Typography>}/>
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </div>
    )
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (<>
        <Container
            maxWidth={false}
            sx={{
                height: '100%'
            }}>
            <Box 
                sx={{ 
                    display: 'flex', 
                    width: '95vw',
                    height: '95vh'}}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        backgroundColor: theme.palette.primary.main
                    }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography 
                            variant="h6" 
                            noWrap 
                            component="div"
                            sx={{color: theme.palette.secondary.main, fontSize: 25}}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}>
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open>
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ 
                        flexGrow: 1, 
                        p: 3, 
                        width: { sm: `calc(100% - ${drawerWidth}px)` } 
                        }}>
                    <Toolbar />
                    {props.children}
                </Box>
            </Box>
        </Container>
    </>);
}

Layout.defaultProps =
{
    children: null
}

Layout.propTypes = 
{
    children: PropTypes.any,
}
