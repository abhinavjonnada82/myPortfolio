import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import FooterBar from './footerbar';

class LandingPage extends Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid">
                <Cell col={12}>
                  <img
                     src ="https://render.bitstrips.com/v2/cpanel/9e76e074-6b42-4690-8e57-17a9fabbf9ca-8f6667c1-8cb6-4fd0-9394-de53c0e28b19-v1.png?transparent=1&palette=1"
                     className="avatar-img"
                     />
                  <div className="banner-text">
                    <h1>Abhinav Jonnada</h1>

                  <hr/>
                  <h2>Technology Enthusiast</h2>
                  <hr/>
                <p className="banner-text">“Yesterday is history, tomorrow is a mystery, and today is a gift... that's why they call it present” 
                        ― Master Oogway</p>
                <div className="social-links">
                {/*Linkedin */}
                   <a href="https://www.linkedin.com/in/abhinav82/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                   </a>
                {/*GitHub */}
                  <a href="https://github.com/abhinavjonnada82" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true" />
                   </a>
                 {/*Instagram */}
                <a href="https://www.instagram.com/abhinav82/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-instagram" aria-hidden="true" />
                   </a>
               
                </div>
                <FooterBar />
                  </div>
                 
                </Cell>
          
              </Grid>
              
            </div>
          
        )
    }
}

export default LandingPage;