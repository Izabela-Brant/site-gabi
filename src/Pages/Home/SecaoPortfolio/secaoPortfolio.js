import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {styles} from "./secaoPortfolioStyle"
import CardComponent from "../../../Components/Card/card";
import {CategoriasArq} from "../../../Conteudo/categoriasArq"

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
                <div style={{marginRight: 20}}>
                    <CardComponent categoria={CategoriasArq[0]} rota="/portfolio/categoria"/>
                </div>
                <div style={{marginRight: 20, marginLeft: 20}}>
                    <CardComponent categoria={CategoriasArq[1]} rota="/portfolio/categoria"/>
                </div>
                <div style={{marginLeft: 20}}>
                    <CardComponent categoria={CategoriasArq[2]} rota="/portfolio/categoria"/>
                </div>
            </div>
        </div>
    );
}
