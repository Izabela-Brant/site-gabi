import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import imagemTeste from "../../Images/Blog/imagemTeste.jpg";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {useHistory} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";

const  windowWidth = window.innerWidth;

const useStyles = makeStyles({
    root: {
        width: 350
    },
    media: {
        height: 310,
        width: 310,
        borderRadius: 200,
        margin:20
    },
});

export default function CardComponent (props) {
    const classes = useStyles();
    const history = useHistory();
    const categoria = props.categoria;
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={()=>{
                history.push({
                    pathname: props.rota,
                })
            }}>
                <CardMedia
                    className={classes.media}
                    image={imagemTeste}
                    title="Contemplative Reptile"
                />
                <Divider/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {categoria.titulo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {categoria.descricao}
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