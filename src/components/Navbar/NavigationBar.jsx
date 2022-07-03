import { React, useState } from 'react';
import classes from './NavbarStyles.module.css';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../assets/ltcreative_logo_design.svg';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SocialIcon from './../SocialMenuIcon';

// Navbar menu items
const MenuItems = [
    { title: 'About', url: '/about' },
    { title: 'Skills', url: '/skills' },
    { title: 'Projects', url: '/projects' },
    { title: 'Contact', url: '/contact' }
];

function NavigationBar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (   
        <AppBar position="fixed" elevation={0} style={{background: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <div style={{flexGrow: 1}}>
                        <img src={Logo} alt="ltcreative logo" className={classes.logo}/>
                    </div>
                    <Hidden smDown>
                        {MenuItems.map((item) => (
                            <NavLink key={item.title} to={item.url} className={classes.navMenuItems} style={{color: 'white'}}>
                                {item.title}
                            </NavLink>
                        ))}
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={() => setOpenMenu(true)}>
                            <SortIcon style={{fontSize: '30', color: 'white'}}/>
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
            <SwipeableDrawer anchor="right" open={openMenu}
                onOpen={() => setOpenMenu(true)} onClose={() => setOpenMenu(false)}>
                    <div className={classes.menuCloseIcon}>
                        <IconButton onClick={() => setOpenMenu(false)}>
                            <CloseIcon style={{fontSize: '30'}}/>
                        </IconButton>
                    </div>
                    <List>
                        {MenuItems.map((item) => (
                            <ListItem key={item.title}>
                                <NavLink to={item.url} onClick={() => setOpenMenu(false)}
                                    className={classes.menuListItems}>
                                    {item.title}
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                    <div className={classes.socialMenuIcon} style={{color: '#242A35'}}>
                        <SocialIcon/>
                    </div>
            </SwipeableDrawer>
        </AppBar>
    );
}

export default NavigationBar;