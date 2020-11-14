import React from 'react';
import ReactDOM from 'react-dom';
import {style} from "./homeStyle";
import SecaoBlog from "./SecaoBlog/secaoBlog";
import SecaoPortfolio from "./SecaoPortfolio/secaoPortfolio";
import SecaoEditorial from "./SecaoEditorial/secaoEditorial";
import SecaoSobreMim from "./SecaoSobreMim/secaoSobreMim";

export default function Home () {
    return(
        <div>
            <div style={style.secaoBlog}>
                <SecaoBlog/>
            </div>
            <div style={style.secaoPortfolio}>
                <SecaoPortfolio/>
            </div>
            <div style={style.secaoPortfolio}>
                <SecaoEditorial/>
            </div>
            <div style={style.secaoSobreMim}>
                <SecaoSobreMim/>
            </div>
        </div>
    )
}