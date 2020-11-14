import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black',
        color: 'black'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // flexGrow: 1,
        justifySelf: 'center'
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
}));

export default function Cabecalho(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <AppBar style={{backgroundColor: 'black'}} position="fixed">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon onClick={handleMenu}/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Site
                        </Typography>

                        <div>
                            {/*<IconButton*/}
                            {/*    aria-label="account of current user"*/}
                            {/*    aria-controls="menu-appbar"*/}
                            {/*    aria-haspopup="true"*/}
                            {/*    onClick={handleMenu}*/}
                            {/*    color="inherit"*/}
                            {/*>*/}
                            {/*    <AccountCircle />*/}
                            {/*</IconButton>*/}
                            <Drawer
                                anchor={'left'}
                                open={open}
                                onClose={handleClose}
                                className={classes.drawer}
                            >
                                {<List>
                                    {['Blog', 'Portfólio', 'Editorial Fotográfico', 'Sobre mim', 'Contato'].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                </List>}
                            </Drawer>
                        </div>

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar/>
        </div>
    );
}

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = window;
    //     useScrollTrigger({
    //     disableHysteresis: true,
    //     threshold: 0,
    //     target: window ? window() : undefined,
    // });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};