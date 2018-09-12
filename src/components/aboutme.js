import React, { Component } from 'react';
import FooterBar from './footerbar';
import Weatherwid from './weatherwidg';


class About extends Component {
    render () {
        return (
            <div>
             <h1 style={{textAlign: 'center', fontWeight: 'bold' }}> Weather Widget </h1>   
            <Weatherwid />
            <FooterBar />
            </div>
        )
    }
}

export default About;