import React from 'react';
import ReactDOM from 'react-dom';
import  {styles} from './secaoSobreMimStyle'
import imagemSobreMim from '../../../Images/Blog/imagemSobreMim.png'
import Grid from "@material-ui/core/Grid";
import {CategoriasArq} from "../../../Conteudo/categoriasArq";
import CardComponent from "../../../Components/Card/card";
import {makeStyles} from "@material-ui/core/styles";
const  windowWidth = window.innerWidth;
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%'
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));
export default function SecaoSobreMim () {
    const classes = useStyles();
    return(
        <div style={styles.container}>
            {/*<img src={imagemSobreMim} alt='Imagem' height={450} width={450} />*/}
            {/*<div style={styles.textContainer}>*/}
            {/*    <div style={styles.titulo}>Sobre mim</div>*/}
            {/*    <div style={styles.texto}>*/}
            {/*        Lorem ipsum vehicula luctus ipsum quisque amet aenean ante eu per, mi pulvinar est litora nisi vestibulum curabitur rhoncus aenean id cubilia, erat vulputate primis risus eleifend commodo habitant scelerisque fames. interdum luctus pretium dictum hac augue dolor purus morbi ligula, conubia platea libero metus aptent conubia ad hac, pulvinar justo cras rutrum pellentesque lacus quis curae. quisque lobortis id curabitur viverra etiam netus condimentum phasellus, nullam tristique venenatis in eget aenean vulputate pellentesque, nibh vulputate potenti luctus proin libero massa. vel aliquam primis adipiscing porta aliquam justo dictumst taciti, scelerisque quam platea etiam ad interdum accumsan lacus, eros facilisis leo vivamus porta purus rhoncus.*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={10}>
                        <Grid key={'imagem'} item>
                            <img src={imagemSobreMim} alt='Imagem' height={500} />
                        </Grid>
                        <Grid key={'texto'} item>
                            <div style={styles.textContainer}>
                                <div style={styles.titulo}>Sobre mim</div>
                                <div style={styles.texto}>
                                    Lorem ipsum vehicula luctus ipsum quisque amet aenean ante eu per, mi pulvinar est litora nisi vestibulum curabitur rhoncus aenean id cubilia, erat vulputate primis risus eleifend commodo habitant scelerisque fames. interdum luctus pretium dictum hac augue dolor purus morbi ligula, conubia platea libero metus aptent conubia ad hac, pulvinar justo cras rutrum pellentesque lacus quis curae. quisque lobortis id curabitur viverra etiam netus condimentum phasellus, nullam tristique venenatis in eget aenean vulputate pellentesque, nibh vulputate potenti luctus proin libero massa. vel aliquam primis adipiscing porta aliquam justo dictumst taciti, scelerisque quam platea etiam ad interdum accumsan lacus, eros facilisis leo vivamus porta purus rhoncus.
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}