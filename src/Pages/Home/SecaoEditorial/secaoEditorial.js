import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Button from "@material-ui/core/Button";
import {style} from "./secaoEditorialStyle";
import imagemEditorial from '../../../Images/Blog/imagemEditorial.jpg'


export default function SecaoEditorial(props)
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
    ];

    return (
        <Carousel autoPlay={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div style={style.container}>
            <div style={style.text}>
                <h1>{props.item.name}</h1>
                <Button>
                    Veja o editorial completo!
                </Button>
            </div>

            <img
                src={imagemEditorial}
                height={500}
                width='100%'
                alt="Imagem"
                style={{marginTop: -95}}
            />
        </div>
    )
}