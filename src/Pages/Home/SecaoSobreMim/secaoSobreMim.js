import React from 'react';
import ReactDOM from 'react-dom';
import  {styles} from './secaoSobreMimStyle'
import imagemSobreMim from '../../../Images/Blog/imagemSobreMim.png'
const  windowWidth = window.innerWidth;

export default function SecaoSobreMim () {
    return(
        <div style={styles.container}>
            <img src={imagemSobreMim} alt='Imagem' height={450} width={450} />
            <div style={styles.textContainer}>
                <div style={styles.titulo}>Sobre mim</div>
                <div style={styles.texto}>
                    Lorem ipsum vehicula luctus ipsum quisque amet aenean ante eu per, mi pulvinar est litora nisi vestibulum curabitur rhoncus aenean id cubilia, erat vulputate primis risus eleifend commodo habitant scelerisque fames. interdum luctus pretium dictum hac augue dolor purus morbi ligula, conubia platea libero metus aptent conubia ad hac, pulvinar justo cras rutrum pellentesque lacus quis curae. quisque lobortis id curabitur viverra etiam netus condimentum phasellus, nullam tristique venenatis in eget aenean vulputate pellentesque, nibh vulputate potenti luctus proin libero massa. vel aliquam primis adipiscing porta aliquam justo dictumst taciti, scelerisque quam platea etiam ad interdum accumsan lacus, eros facilisis leo vivamus porta purus rhoncus.
                </div>
            </div>
        </div>
    )
}