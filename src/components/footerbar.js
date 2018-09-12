import React from 'react';
import {  Container,  Footer } from 'mdbreact';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class FooterBar extends React.Component {
    render(){
        return(
            <Footer color="stylish-color-blue" className="page-footer font-small pt-4 mt-4">
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                
                       <span style={{fontSize: '20px'}}> Powered by <i className="fab fa-react"> React JS </i> </span>
                    <ProgressBar style={{margin: 'auto', width: '75%'}} indeterminate />
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterBar;

