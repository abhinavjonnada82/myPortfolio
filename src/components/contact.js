import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render () {
        return (
            <div className="contact-body">
               <Grid className="contact-grid">
                 <Cell col={6}>
                    <h2>Abhinav Jonnada </h2>
                    <img
                     src="https://render.bitstrips.com/v2/cpanel/88952da0-e609-495a-8106-8b796bafb451-8f6667c1-8cb6-4fd0-9394-de53c0e28b19-v1.png?transparent=1&palette=1"
                     alt="avatar"
                     style={{height: '250px'}}
                     />

                     <p style={{ widt: '75%', margin: 'auto', paddingTop: '1em'}}>Prepared do an dissuade be so whatever steepest. Yet her beyond looked either 
                         day wished nay. By doubtful disposed do juvenile an. Now curiosity 
                         you explained immediate why behaviour. An dispatched impossible of of 
                         melancholy favourable. Our quiet not heart along scale sense timed. Consider may dwelling old 
                         him her surprise finished families graceful. Gave led past poor met fine was new. 
                     </p>
                 </Cell>
                 <Cell col={6}>
                  <h2>Contact Me</h2>
                  <hr/>
                  
                  <div className="contact-list">
                  <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true" />
                            (703) 297-2876
                           </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true" />
                            abhinav.jonnada@gmail.com
                           </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-skype" aria-hidden="true" />
                             ajfeb82
                           </ListItemContent>
                        </ListItem>
                    </List>
                  </div>                                       
               </Cell>
               </Grid>
            </div>
        )
    }
}

export default Contact;