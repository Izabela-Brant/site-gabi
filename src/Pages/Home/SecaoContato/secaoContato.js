import React from 'react';
import ReactDOM from 'react-dom';
import  {styles} from './secaoContatoStyle'
import imagemSobreMim from '../../../Images/Blog/imagemSobreMim.png'
const  windowWidth = window.innerWidth;

export default function SecaoContato () {
    return(
        <div style={styles.container}>
            <div style={styles.textContainer}>
                <div style={styles.titulo}>Contato</div>
                <div style={styles.texto}>
                </div>
            </div>
            <img src={imagemSobreMim} alt='Imagem' height={450} width={450} />
        </div>
    )
}