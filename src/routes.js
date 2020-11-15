import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Header/header';
import Publicacao from "./Pages/Blog/Publicacao/publicacao";
import Blog from "./Pages/Blog/blog";
import Portfolio from "./Pages/Portfolio/portfolio";
import Categoria from "./Pages/Portfolio/Categoria/categoria";
import Editorial from "./Pages/EditoriaisFotograficos/Editorial/editorial";
import EditoriaisFotograficos from "./Pages/EditoriaisFotograficos/editoriaisFotograficos";
import SobreMim from "./Pages/SobreMim/sobreMim";
import Home from "./Pages/Home/home";
import Rodape from "./Components/Rodape/rodape";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Fragment>
                    <Header/>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/portfolio" exact component={Portfolio} />
                        <Route path="/editoriais" exact component={EditoriaisFotograficos} />
                        <Route path="/sobre-mim" component={SobreMim} />
                        {/*<Route path="/contato" component={Contato} />*/}
                        <Route path="/blog/publicacao" component={Publicacao} />
                        <Route path="/portfolio/categoria" component={Categoria} />
                        <Route path="/editoriais/editorial" component={Editorial}/>
                    </div>
                        <Rodape/>
                </Fragment>
            </Switch>
        </BrowserRouter>
    )
}