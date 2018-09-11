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
                        <CardTitle style={{color: 'black', height: '176px', background:
                        'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'}} >
                        Python Project </CardTitle>
                        <CardText>
                        In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection we. 
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
                    <CardTitle style={{color: 'black', height: '176px', background:
                    'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'}} >
                    Python Project </CardTitle>
                    <CardText>
                    In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection we. 
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
                    <CardTitle style={{color: 'black', height: '176px', background:
                    'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'}} >
                    Python Project </CardTitle>
                    <CardText>
                    In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection we. 
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
                <div><h1>This is C++</h1></div>
            )
         } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is React JS</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is React-Native</h1></div>
            )
    }
}


    render () {
        return (
            <div className="category-tabs"> 
              <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID})} ripple>
                    <Tab>Python</Tab>
                    <Tab> C++ </Tab>
                    <Tab> ReactJS </Tab>
                    <Tab> React-Native </Tab>
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