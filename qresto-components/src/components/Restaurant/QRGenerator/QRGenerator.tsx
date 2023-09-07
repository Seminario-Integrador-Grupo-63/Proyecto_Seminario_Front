import styles from './QRGenerator.module.scss';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Container, TextField } from '@mui/material';
import { QRFrame } from './QRFrame/QRFrame';
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
import PictureAsPdf from '@mui/icons-material/PictureAsPdf'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */

  window?: () => Window;
}

export const QRGenerator = (props: any) => {
    const { window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [inputText, setInputText] = useState('');

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const onInput = (event: any) => {
        setInputText(event.target.value);
    }
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
            <ListItem key={"text"}>
                <TextField 
                    variant="outlined" 
                    label="Texto"
                    value={inputText}
                    onChange={onInput}>
                </TextField>
            </ListItem>
            <ListItem key={"pdf"}>
                <ListItemButton>
                    <ListItemIcon style={{ color: props.primaryColor }}>
                    {<PictureAsPdf />}
                    </ListItemIcon>
                    <ListItemText primary={"Generar PDF"} />
                </ListItemButton>
            </ListItem>
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (<>
        <Container>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        backgroundColor: props.primaryColor
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
                        sx={{color: '#DECAA7', fontSize: 25}}>
                        Generar QR
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
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
                    }}
                    >
                    {drawer}
                    </Drawer>
                    <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                    >
                    {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <QRFrame 
                        qrcode={props.qrcodes[0]}
                        text={inputText}/>
                </Box>
            </Box>
        </Container>
    </>);
}

QRGenerator.defaultProps =
{
    primaryColor: '#681821',
    qrcodes: [
        "iVBORw0KGgoAAAANSUhEUgAAAZUAAAGVAQAAAAAeIFGWAAABsklEQVR4nO3bMZKDMAyFYTEUKXOEHIWjwdE4CkdImSKDFmMLy2xmZ9OK/xWZmPDRaSIZEP06L8FgQppVfLZlvx1/ykPntMwnufQYTFzTH6Ux2SXuumyfoxXM3U5YMZjYJlfIkI2vH+mKWWp1YTDXMKpvadJjMNc0azlJc1+1YjCXMq6vauvnf70YBhPE+LiCceXkgsGENb/yltv2udSTTsFggpr8X/L0NXLbl6l+ylJLOclRcxhMPFMbqWH7Ll1ZPjS1WfvyVq/YWc1hMPFM6qtOR3PmfCD3VWlbdmxmDAwmmlFXMFv95OQBe7JLHLcoBIOJbGx3aT/aHTPGkH6p27JalxhMSNM+qOH+S/Q8Y6j6vgqDiWksrs0abMawK+75vHeLwYQwdhOi1E8esB97BbnlLOf72xhMTHPqq9QGbMtgIwcGE9Sc4reixjxUpCwYTHjzoa9KaTZe7+34jcEENX+8/yPi6sfP2xhMTPPaTxzMuM2mmrLsMZjLGCunOR2zd+FyMJgLGXUbr6Pqh0ddMZjAxjK1L/xMNo27R10xmMDG57jEYktpt2UxmLDm62AwIc0PjW7F1Emh5noAAAAASUVORK5CYII="
    ]
}

QRGenerator.propTypes = 
{
    qrcodes: PropTypes.array,
    primaryColor: PropTypes.string
}


