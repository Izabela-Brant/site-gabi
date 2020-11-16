import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'

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
import logoPrincipal from "../../Images/Logo/logo-principal-header.png"

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        color: 'black',

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    logo: {
        margin: "auto",
        textAlign: "center",
        // maxWidth: "50%",
        // maxHeight: "70%"
    },
    logoHorizontallyCenter: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    }
}));

export default function Cabecalho(props) {
    const itensMenu = [
        {
            nome: 'Início',
            rota: '/',
        },{
            nome: 'Blog',
            rota: '/blog',
        }, {
            nome: 'Portfólio',
            rota: '/portfolio'
        }, {
            nome: 'Editorial Fotográfico',
            rota: '/editoriais'
        }, {
            nome: 'Sobre mim',
            rota: '/sobre-mim',
        }, {
            nome: 'Contato',
            rota: ''
        }
    ]
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const history = useHistory();

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
                        <div className={classes.logoHorizontallyCenter}>
                            <img src={logoPrincipal} height={130} className={classes.logo}/>                        </div>

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
                                <Toolbar>

                                </Toolbar>
                                {<List>
                                    {itensMenu.map((item, index) => (
                                        <ListItem button key={item.nome} onClick={()=>{
                                            history.push({
                                                pathname: item.rota,
                                            });
                                            handleClose()
                                        }}>
                                            <ListItemText primary={item.nome} />
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