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
                        <p> I'm a student, developer, technology enthusiast and DREAMER hoping to create a difference in people's lives through my education and work.

Apart from working my way towards my degree, I've taken my personal time and have learned Python, JavaScript (React JS) & front-end development skills. Made couple of projects on my own which led to an internship at a tech based health startup.</p> 
<p>And over the summer, I was working at NetApp (Top 100 internships in the US - WayUp) as an intern for SolidFire - Platform Engineering Team. </p>

<p>Currently I'm interning at The Phoenix Mortgage, Inc. for Fall 2018.</p>

<p>In my spare time I like staying active and watching movies & TV shows.</p>
                        
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
                    
                    <h2>Experience</h2>
                    
                    <Experience
                       durYear={"October 2017 - April 2018"}
                       jobName="Web Developer- KingFit Preventive Health and Performance"
                       jobDescription="Admin portal; internal web page built for team to manage videos and track it.
                       Created using React JS, Material UI and Firebase. With the help of React static and web graphics, prototype secondary website was built
                       Trello to track weekly goals established during Scrum meetings. BitBucket and VS code for version control and code changes"
                  />

                   
                   <Experience
                       durYear={"May 2018 - August 2018"}
                       jobName="Software Engineer Intern- NetApp"
                       jobDescription="•	USB-bootable OS with docker image - python tool created to help teams to parse for specific bug signatures using RegEx in log directories from NetApp HCI server
                       •	Tool provides the functionality of some look-behind and look-ahead of the logs while searching for one or multiple signatures in directory and etc
                       •	Project 2: Bug Analysis dashboard in JIRA using JQL, to give a manager or engineer, or any member of a team, an overview of current status, issues present and how can the workload be balanced
                       •	Research based project; dashboard was designed filtering down to only issues with type BUG and various charts depict priority level, assignee, etc
                       •	Project 3:Field customers were inquiring about running NetApp HCI servers in non VMware environment
                       •	Test installing and running non VMware (RedHat 7 and Windows Server 16) on NetApp HCI Server
                       •	JIRA for stories and issues tracking established during scrum meetings, Confluence for documentation and BitBucket for GIT
                       "
                  />

                  <Experience
                       durYear={"September 2018 - December 2018"}
                       jobName="Software Engineer Intern- The Phoenix Finances, Inc."
                       jobDescription="• Assist in development of React-Native + Redux mobile app prototype
                       thatinvolves GPS location, proximity marketing, document exchange, etc
                       • Assist in the design and development of mobile friendly website
                       concepts and UI using WordPress
                       • Weekly Scrum meetings to update team on progress of projects "
                  />
                          <hr style={{borderTop: '3px solid #e22947'}} />

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
                            endYear={"Fall 2018"}
                            schoolName="Wichita State University"
                            schoolDescription="COURSEWORK:
                            •Data Structures and Algorithms
                            •Object Oriented Programming
                            •Microprocessor Based System Design
                            •Linux Essentials
                            •Computer Architecture
                            •Operating Systems "
                       />

                       <hr style={{borderTop: '3px solid #e22947'}} />

                   

                  

                
                <h2>Skills</h2>

                        <Skills 
                         skill = "Programming Languages:
                         • C++ • Python • JavaScript"
                        />
                        <Skills
                        skill="Web /App Development:
                        • React JS • React-Native • HTML5
                        • CSS3 • jQuery • Bootstrap 3
                        • WordPress • Django • Redux
                        • UI • Assembly" />
                        <Skills 
                        skill ="OS:
                        • Linux • Windows • Mac" />
                        <Skills 
                        skill="
                        Tools:
                        • Docker • AWS(EC2, S3) • Bash
                        • VirtualBox • JIRA • GIT
                        • FireBase • Twilio • MongoDB
                        Microprocessor:
                        • Arduino • Raspberry PI" />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;