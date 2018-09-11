import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render () {
        return (
            <div>
                <Grid>
                    <Cell col={4}> 
                       <div style = {{textAlign: 'center'}}>
                        <img
                          src="https://render.bitstrips.com/v2/cpanel/9295ce82-a403-4849-a081-7f4b0b65b442-8f6667c1-8cb6-4fd0-9394-de53c0e28b19-v1.png?transparent=1&palette=1"
                          alt="avatar"
                          style={{height: '200px'}}
                           />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Abhinav Jonnada</h2>
                        <h4 style={{color: 'grey'}}>> Software Engineer</h4>
                        <hr stye={{borderTop: '3px solid #833fb3', width: '50%'}}/>
                        <p> Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy.
                            Me in resolution pianoforte continuing we. Most my no spot felt by no. 
                            He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. Too objection for elsewhere her preferred allowance her. 
                            Marianne shutters mr steepest to me. Up mr ignorant produced distance although is sociable blessing. Ham whom call all lain like. 
                        </p> 
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Phone</h5>
                        <p>(703) 297-2872</p>
                        <h5>Email</h5>
                        <p>abhinav.jonnada@gmail.com</p>
                        <h5>Web</h5>
                        <p>abhina8.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                       </Cell>
                    <Cell className="resume-right-col" col={8}> 
                      <h2>Education</h2>
                       <Education 
                            startYear={2012}
                            endYear={2016}
                            schoolName="My University"
                            schoolDescription="Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. 
                            Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. 
                            Steepest speaking up attended it as. Made neat an on be gave show snug tore. "
                       />

                       <Education 
                            startYear={2012}
                            endYear={2016}
                            schoolName="My University"
                            schoolDescription="Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. 
                            Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. 
                            Steepest speaking up attended it as. Made neat an on be gave show snug tore. "
                       />

                       <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Experience</h2>
                    
                  <Experience
                     startYear={2009}
                     endYear={2012}
                     jobName="First Job"
                     jobDescription="Do so written as raising parlors spirits mr elderly. Made late in of high left hold. Carried females of up highest calling. 
                     Limits marked led silent dining her she far. Sir but elegance marriage dwelling likewise position old pleasure men. Dissimilar themselves simplicity no of contrasted as. 
                     Delay great day hours men. Stuff front to do allow to asked he. "
                />

                   <hr style={{borderTop: '3px solid #e22947'}} />

                
                <h2>Skills</h2>

                        <Skills 
                        skill="Python"
                        
                        />
                        <Skills 
                        skill="C++  "
                        
                        />
                        <Skills 
                        skill="ReactJSt"
                        
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;