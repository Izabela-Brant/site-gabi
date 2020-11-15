import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {style} from "./secaoBlogStyle";
import imagemBlog from '../../../Images/Blog/publi-1-home.png'

const useStyles = makeStyles((theme) => ({
    carousel:{
        height: 400,
    }
}));

export default function SecaoBlog(props)
{
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel interval={6000}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    // const classes = useStyles();
    return (
        <div style={style.container}>
            <div style={style.textContainer}>
                <h1>{props.item.name}</h1>
                <p>{props.item.description}</p>
                <Button style={{width: 100, backgroundColor: 'pink', marginTop: 10}}>Leia Mais!</Button>
            </div>

            <img src={imagemBlog} height={500} alt="Imagem" style={{padding: 15}}/>



                {/*<Button>*/}
                {/*    Check it out!*/}
                {/*</Button>*/}

        </div>
    )
}