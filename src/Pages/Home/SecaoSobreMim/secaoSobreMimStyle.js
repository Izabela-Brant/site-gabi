import React from "react";

const  windowWidth = window.innerWidth;
export const styles = {
    container:{
        height: 560,
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        justifyContent: 'space-between'
    },
    titulo:{
        fontSize: 40,
        marginBottom:20
    },
    textContainer:{
        width:(windowWidth/2) - 60,
        textAlign: 'center',
    },
    texto:{
        width: '100%',
        textAlign: 'justify',
    }
}