import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Espacio = () => {
    const customStyle = {
        backgroundColor: 'white',
        color: 'white',
        height: '100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
    return (<Fragment><div style={customStyle}></div></Fragment>)

}
export default Espacio;