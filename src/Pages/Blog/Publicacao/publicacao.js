import React from "react";
import capaPubli from '../../../Images/Blog/capaPubli.png'
import {styles} from "./publicacaoStyle";
import Typography from "@material-ui/core/Typography";

export default function Publicacao(props) {
    return(
        <div>
            <img src={capaPubli} width='100%'/>
            <div style={{padding: 70}}>
                <Typography style={styles.titulo}>
                    Título do texto
                </Typography>
                <Typography style={styles.subtitulo}>
                    by Gabi Brant
                </Typography>
                <Typography style={styles.subtitulo}>
                    Data: 14/11/2020
                </Typography>
                <Typography style={styles.texto}>
                    Lorem ipsum ultricies in malesuada aliquet mi duis scelerisque morbi torquent volutpat, quisque dictumst tristique praesent leo curabitur cras convallis curabitur consequat. lacinia pellentesque ligula consectetur elementum nulla ullamcorper nec metus, ornare himenaeos gravida accumsan habitant iaculis tincidunt aptent vehicula, eget duis urna lectus porta etiam fusce. risus lacus himenaeos orci adipiscing iaculis fusce, nibh class posuere litora justo condimentum, nam eu himenaeos feugiat sagittis. torquent auctor vivamus suscipit congue semper facilisis accumsan rutrum, est vivamus pharetra sagittis velit quisque felis, mauris senectus velit auctor fames netus elit. egestas cras vel amet vestibulum etiam potenti quisque praesent, curabitur tincidunt facilisis curabitur odio vulputate donec consequat, quis sed ut praesent sit nulla et.
                </Typography>
                <img src={capaPubli} width='100%'/>
                <Typography style={styles.texto}>
                    Ad nisi dui molestie placerat, hendrerit praesent tempus aliquam, augue neque proin. laoreet eu varius netus odio viverra etiam aptent tellus senectus non, urna euismod porttitor nunc fringilla vehicula eros amet cursus, lectus nibh tristique convallis quam rutrum porta inceptos taciti. convallis facilisis fames est nullam auctor, mattis dui congue dolor nam, eget aliquet ultricies dui. erat leo tortor congue dolor habitant convallis tincidunt risus tempus cras augue, eleifend blandit rhoncus augue sed fames interdum nullam varius diam. porttitor gravida commodo rhoncus lectus semper etiam congue condimentum, lectus semper magna eleifend placerat sem cras, morbi quis elementum hendrerit quisque velit dictumst.
                </Typography>
                <img src={capaPubli} width='100%'/>
                <Typography style={styles.texto}>
                    Ullamcorper porttitor nam semper posuere fusce pharetra luctus molestie cubilia, vitae duis porta hac dui phasellus suspendisse ligula scelerisque, proin blandit fames pellentesque nec nulla sagittis nisi. hendrerit lectus aptent nunc dui turpis elit cras maecenas tempor libero mi primis suscipit porttitor, euismod auctor ipsum donec commodo consequat sapien enim purus nec morbi scelerisque tempor. vivamus pharetra eros sociosqu pellentesque sagittis magna tortor habitasse luctus, sapien neque turpis quis sagittis accumsan pharetra et. commodo vivamus et bibendum donec praesent himenaeos odio auctor faucibus vel, feugiat sem platea inceptos mollis sociosqu aliquet facilisis varius, ante class inceptos mollis nibh cursus venenatis himenaeos torquent.
                </Typography>
            </div>
        </div>
    )
}
