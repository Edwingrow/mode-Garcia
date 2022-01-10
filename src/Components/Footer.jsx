import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

//class footer extends React.Component{
//   render(){
//        const customStyle = {
//            backgroundColor: '#red',
//           padding: '10px',
//            fontFamily: 'Arial',
//            color: '#white',
//        }
//        return(
//            <div style={customStyle}> Hola </div>
//        
//        )
//           
//    }
// }
const Footer = (props) => {
    const customStyle = {
        backgroundColor: 'red',
        padding: '10px',
        fontFamily: 'Arial',
        color: 'white',
        fontSize: '22px',
    }
    return (<Fragment><div style={customStyle}>{props.mensaje}</div></Fragment>)

}
export default Footer;