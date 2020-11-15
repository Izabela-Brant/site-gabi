import React from "react";
import Typography from "@material-ui/core/Typography";
import {styles} from "./blogStyle";
import CardComponent from "../../Components/Card/card";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {CategoriasArq} from '../../Conteudo/categoriasArq'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Blog() {
    const classes = useStyles();

    return(
        <div style={{padding:15}}>
            <Typography style={styles.titulo}>
                Blog
            </Typography>
            <Grid container className={classes.root} spacing={10}>
                <Grid item xs={12}>
                    <Grid container justify="space-evenly" spacing={10}>
                        {CategoriasArq.map((categoria) => (
                            <Grid key={categoria.id} item>
                                <CardComponent categoria={categoria} rota="/blog/publicacao"/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}




function NestedGrid() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                {CategoriasArq.map((item) => {
                    return(
                        <Grid item xs={4}>
                            <CardComponent/>
                        </Grid>
                    )
                })}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}
