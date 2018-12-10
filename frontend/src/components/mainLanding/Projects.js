import React, {Component} from 'react';
import {Tabs, 
        Tab, 
        Grid, 
        Cell, 
        Card, 
        CardTitle, 
        CardActions,
        CardText, 
        Button, 
        CardMenu, 
        IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                
                <div className='projectsGrid animated zoomIn'>
                <Cell col={6}>
                    <Card shadow={5}>
                        <CardTitle className='project1React'
                        style={{color: '#fff', height: '176px'}}>
                        WhatsInThis?
                        </CardTitle>
                        <CardText>
                            An app that enables you to 
                            search fitness supplements from bodybuilding.com. 
                            The app uses cheerio and the backend server to breakdown each 
                            ingredient for the product.
                        </CardText>
                        <CardActions border>
                            <a href='https://github.com/kaeleb/WhatsInThis' target='_blank' rel="noopener noreferrer">
                                <Button colored>GitHub</Button>
                            </a>
                            <Button disabled>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={6}>
                    <Card shadow={5} >
                        <CardTitle className='project2React'
                        style={{color: '#000', height: '176px'}}>
                        PortfolioV2
                        </CardTitle>
                        <CardText>
                            This portfolio started as plain html. I have future plans of making into a full-stack application
                            and integrating a personal brand with features such as a fitness / workout application.
                        </CardText>
                        <CardActions border>
                            <a href='https://github.com/kaeleb/portfolio_v2' target='_blank' rel="noopener noreferrer">
                                <Button colored>GitHub</Button>
                            </a>
                            
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    </Cell>
                </div>
            
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <Cell col={6}>
                        <Card shadow={5} >
                            <CardTitle className='project1node'
                            style={{color: '#fff', height: '176px'}}>
                            Movie Spoiler
                            </CardTitle>
                            <CardText>
                                A game played via CLI, it asks you for a movie, scrapes a google search for 
                                titles releated to your search, then displayes the plot to the movie from an 
                                object returned from TMDB
                            </CardText>
                            <CardActions border>
                                <a href='https://github.com/kaeleb/movie_spoiler' target='_blank' rel="noopener noreferrer">
                                    <Button colored>GitHub</Button>
                                </a>
                                <Button disabled>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name='share' />
                            </CardMenu>
                        </Card>
                </Cell>
            </div>
            )
        }  else if (this.state.activeTab === 2) {
            return (
            <div className='animated zoomIn'>
            <Cell col={6}>
                <Card shadow={5} >
                    <CardTitle className='project1EJS'
                    style={{color: '#fff', height: '176px'}}>
                    Express Cinema
                    </CardTitle>
                    <CardText>
                        An EJS server side rendered app. It pulls data from TMDB and displays
                        most popular movies. Search function uses TMDB API and returns movies matching the search.
                        There is also an individual page for each movie displaying some data from the object returned from the API.
                    </CardText>
                    <CardActions border>
                        <a href='https://github.com/kaeleb/ExpressCinema' target='_blank' rel="noopener noreferrer">
                            <Button colored>GitHub</Button>
                        </a>
                        <Button disabled>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                </Cell>
            </div>
            )
        } else if (this.state.activeTab === 3) {
            return(
                <div className='animated zoomIn'>
                <Cell col={6}>
                    <Card shadow={5} >
                        <CardTitle className='project1php'
                        style={{color: '#fff', height: '176px'}}>
                        PHP Rest API
                        </CardTitle>
                        <CardText>
                            A PHP API based on REST principles. No frontend work done, CRUD functionality was the main purpose of this demo.
                        </CardText>
                        <CardActions border>
                            <a href='https://github.com/kaeleb/php_rest_api' target='_blank' rel="noopener noreferrer">
                                <Button colored>GitHub</Button>
                            </a>
                            <Button disabled>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </Cell>
            </div>
            )
        }
    }

    render(){
        return(
            <div className='categoryTabs'>
                <h3>Projects</h3>
                <hr/>
                <Tabs
                    className='tabText'
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                        <Tab>React</Tab>
                        <Tab>NodeJS</Tab>
                        <Tab>EJS</Tab>
                        <Tab>PHP</Tab>
                </Tabs>
                    <Grid>
                        <div className='content'>
                            {this.toggleCategories()}
                        </div>
                    </Grid>
            </div>
        )
    }
}

export default Projects;