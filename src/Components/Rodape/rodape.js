// import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import PropTypes from 'prop-types';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import CssBaseline from "@material-ui/core/CssBaseline";
import logo from '../../Images/Logo/logo-principal.jpeg'
// const  windowHeight = window.innerHeight;
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: 'black',
//         top: windowHeight,
//         height: 150
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         // flexGrow: 1,
//         justifySelf: 'center'
//     },
//     drawer: {
//         width: 240,
//         flexShrink: 0,
//     },
// }));
//
// export default function Rodape(props) {
//     const classes = useStyles();
//     const [open, setOpen] = useState(false);
//
//     const handleMenu = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     return (
//         <div>
//             <CssBaseline/>
//             <Toolbar className={classes.root}>
//                 <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//                     <img src={logo} height={100} alt="Logo"/>
//                 </IconButton>
//             </Toolbar>
//         </div>
//     );
// }

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
const  windowHeight = window.innerHeight;
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black',
        height: 150
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        width: '100%',
        marginTop: 'auto',
        backgroundColor: 'black'
    },
    menuButton: {
        marginRight: theme.spacing(1),
        alignSelf: 'start'
    },
}));

export default function StickyFooter() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Toolbar>
                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                        <img src={logo} height={100} alt="Logo" className={classes.menuButton}/>
                    {/*</IconButton>*/}
                </Toolbar>
            </Container>
        </footer>
    );
}