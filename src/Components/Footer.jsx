import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Footer = (props) => {
    const customStyle = {
        backgroundColor: '#2a5678',
        color: 'white',
        marginTop: '40px',
        height: '100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
    return (<Fragment><div style={customStyle}>{props.mensaje}</div></Fragment>)

}
export default Footer;