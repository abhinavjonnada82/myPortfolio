import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '150px', background:
                        'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'}} >
                        Python Project </CardTitle>
                        <CardText>
                          Expense Tracker - Python and Django and Bootstrap 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '150px', background:
                    'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'}} >
                    Python Project </CardTitle>
                    <CardText>
                        Coming soon!!!
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '150px', background:
                    'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'}} >
                    Python Project </CardTitle>
                    <CardText>
                        Coming soon!!!
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

            </div>
                
            )
         } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '150px', background:
                'url(https://sdtimes.com/wp-content/uploads/2018/03/cpppp-490x490.png) center / cover'}} >
                C++ Project </CardTitle>
                <CardText>
                Classic DoodleBug and Ant simulator
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '150px', background:
            'url(https://sdtimes.com/wp-content/uploads/2018/03/cpppp-490x490.png) center / cover'}} >
            C++ Project </CardTitle>
            <CardText>
                Coming soon!!!
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>
        </div>
            )
         } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '150px', background:
                'url(https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png) center / cover'}} >
                Vanilla JS </CardTitle>
                <CardText>
                    2D Interactive Tic Tac Toe
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>

                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '150px', background:
                'url(https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png) center / cover'}} >
                Vanilla JS</CardTitle>
                <CardText>
                   My First Website
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '150px', background:
                'url(https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png) center / cover'}} >
                React JS </CardTitle>
                <CardText>
                   Current Portfolio
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
                </div>
            )
        } 
}


    render () {
        return (
            <div className="category-tabs"> 
              <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID})} ripple>
                    <Tab>Python</Tab>
                    <Tab> C++ </Tab>
                    <Tab> JavaScript </Tab>
               </Tabs>

                  <Grid>
                   <Cell col={12}>
                     <div className="content"> {this.toggleCategories()}</div>
                   </Cell>
                  </Grid>
                
            </div>
        )
    }
}



export default Projects;