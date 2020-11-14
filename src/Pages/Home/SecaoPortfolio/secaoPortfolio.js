import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imagemTeste from '../../../Images/Blog/imagemTeste.jpg'
import Divider from "@material-ui/core/Divider";
import {styles} from "./secaoPortfolioStyle"

const  windowWidth = window.innerWidth;

const useStyles = makeStyles({
    root: {
        maxWidth: 0.25 * windowWidth,
    },
    media: {
        height: (0.25 * windowWidth) - 40,
        width: (0.25 * windowWidth) - 40,
        borderRadius: 200,
        margin:20
    },
});

export default function SecaoPortfolio() {

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <Typography style={styles.titulo}>
                    Portfólio
                </Typography>
                <Button>Ver mais</Button>
            </div>
            <div style={styles.cardContainer}>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </div>
        </div>
    );
}

function CardComponent () {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imagemTeste}
                    title="Contemplative Reptile"
                />
                <Divider/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Teste
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate.
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/*<CardActions>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        Share*/}
            {/*    </Button>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        Learn More*/}
            {/*    </Button>*/}
            {/*</CardActions>*/}
        </Card>
    )
}
