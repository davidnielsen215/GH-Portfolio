import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'
import './Projects.css'
import './CardImages.css'
import './App.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'

class Projects extends Component {
    constructor(props) {
        super(props) 
            this.state = { 
                activeTab: 0,
                pixelWallet: 'https://pixel-wallet-dn.herokuapp.com/login',
                lyricalGenius: "https://lyricalgenius.surge.sh/",
                reactCalculator: "https://reactcalculator.surge.sh/",
                googleMap: "https://dn-googlemap.surge.sh/",
                marioPest: "https://mario-pestcontrol.surge.sh/",
                todoAxios: "http://todoaxios.surge.sh/",
                htmlCalculator: "http://html-calculator.surge.sh/",
                businessTime: "https://business-time.surge.sh"
            }

    }
    
    copyLink() {
            alert('Project URL copied to clipboard')
    }

    toggleCategories() {
       if (this.state.activeTab === 0){
        return(
            <div className='projects-grid'>

            <div className='alignment' id='pxlwallet'>
            <Card shadow={5} className='project-card' >
                
                <CardTitle className='pixel-wallet'>
                    Pixel Wallet
                </CardTitle>
                
                <CardText>Budgeting app with daily spending limit calculated for overdraft prevention. Password encryption implemented for user security.
                </CardText>

                <CardText>Technologies:<br/>
                     React, CSS, JSX, MongoDB, Axios, Express, Token Authentication, Bcrypt
                </CardText>
                
                <CardActions border style={{justifyContent: 'space-evenly'}}>
                    <div style={{display: 'grid' }}>

                    <Button colored
                        href={this.state.pixelWallet}
                        target="_blank">
                        Launch 
                    </Button>
                    <Button colored 
                        href="https://github.com/davidnielsen215/Pixel-Wallet" 
                        target="_blank">
                        View Code
                    </Button>


                    <CopyToClipboard text={this.state.pixelWallet}>
                        <Button colored onClick={this.copyLink}>
                            Share
                        </Button>
                    </CopyToClipboard>

                        </div>
                </CardActions>

                
            </Card>
            </div>
            <div className='alignment'>
            <Card shadow={5} className='project-card'>
                
                <CardTitle className='googlemap'>
                    Map Forecast
                </CardTitle>
                
                <CardText>Google Map API displays a location; selected location uses coordinates to query http client and retrieve forecast information.
                </CardText>

                <CardText>Technologies:<br/>
                     React, CSS, HTML, JSX, Axios 
                </CardText>
                
                <CardActions border style={{justifyContent: 'space-evenly'}}>
                    <div style={{display: 'grid' }}>

                <Button colored
                    href={this.state.googleMap}
                    target="_blank">
                        Launch
                </Button>
                <Button colored
                    href="https://github.com/davidnielsen215/Google-Map-Forecast"
                    target="_blank">
                        View Code
                </Button>


                <CopyToClipboard text={this.state.googleMap}>
                    <Button colored
                    onClick={this.copyLink}>Share</Button>
                </CopyToClipboard>

                    </div>
                </CardActions>

                
            </Card>
                </div>
            
                <div className='alignment'>
            <Card shadow={5} className='project-card'>
                
                <CardTitle className='lyrical-genius'>
                Lyrical Genius
                </CardTitle>
                
                <CardText> Lyric rendering application that retrieves song lyrics based on user input values of artist and song. 
                </CardText>
                <CardText>Technologies:<br/>
                     React, CSS, HTML, JSX, Axios
                </CardText>
                
                <CardActions border style={{justifyContent: 'space-evenly'}}>
                    <div style={{display: 'grid' }}>

                    <Button colored
                        href={this.state.lyricalGenius}
                        target="_blank">
                        Launch
                    </Button>
                    <Button colored
                        href="https://github.com/davidnielsen215/vschool-assignments/tree/master/projects/Week7/Lyrical-Genius"
                        target="_blank">view code
                    </Button>


                    <CopyToClipboard text={this.state.lyricalGenius}>
                        <Button colored
                        onClick={this.copyLink}>Share</Button>
                    </CopyToClipboard>

                    </div>
                </CardActions>

                
            </Card>
            </div>
            <div className='alignment'>

            <Card shadow={5} className='project-card'>
                
                <CardTitle className='calculator'>
                    Calculator
                </CardTitle>
                
                <CardText>Calculator app that uses the 'mathjs' npm package capable of multiplying, adding, and subtracting any given input and returns the result.
                </CardText>
                <CardText>Technologies:<br/>
                     React, CSS, HTML, JSX
                </CardText>
                
                <CardActions border style={{justifyContent: 'space-evenly'}}>
                    <div style={{display: 'grid' }}>

                <Button colored
                    href={this.state.reactCalculator}
                    target="_blank">Launch
                </Button>
                <Button colored
                    href="https://github.com/davidnielsen215/calculator-app"
                    target="_blank">view code
                </Button>


                <CopyToClipboard text={this.state.reactCalculator}>
                    <Button colored
                    onClick={this.copyLink}>Share</Button>
                </CopyToClipboard>

                    </div>
                </CardActions>

                
            </Card>
            </div>
            
            {/* <Card shadow={5} className='project-card' >
                
                <CardTitle className='mario-pest' >
                    Mario Pest Control
                </CardTitle>
                
                <CardText>Application created for counting total coin amount depending on type of "mario" pest. result displayed by multiplying user input values through use of HTML DOM methods.
                </CardText>
                
                <CardActions border style={{justifyContent: 'space-evenly'}}>
                    <div style={{display: 'grid' }}>

                    <Button colored
                    href="https://github.com/davidnielsen215/vschool-assignments/tree/master/projects/Week2/Mario-pest-control"
                    target="_blank">
                        GitHub
                    </Button>

                    <Button colored
                    href={this.state.marioPest}
                    target="_blank">
                        Launch
                    </Button>

                    <CopyToClipboard text={this.state.marioPest}>
                        <Button colored onClick={this.copyLink}>
                            Share
                        </Button>
                    </CopyToClipboard>

                        </div>
                </CardActions>

                
            </Card> */}

            {/* <Card shadow={5} className='project-card' >
                
                <CardTitle className='html-calculator' >
                    HTML Calculator
                </CardTitle>
                
                <CardText>Calculator used for multiplying, dividing, and subtrating user input values through use of HTML and Javascript DOM manipulation. 
                </CardText>
                
                <CardActions border style={{justifyContent: 'space-evenly'}}>
                    <div style={{display: 'grid' }}>

                    <Button colored
                    href="https://github.com/davidnielsen215/vschool-assignments/tree/master/exercises/Week2/HTML-Calculator"
                    target="_blank">
                        GitHub
                    </Button>

                    <Button colored
                    href={this.state.htmlCalculator}
                    target="_blank">
                        Launch
                    </Button>

                    <CopyToClipboard text={this.state.htmlCalculator}>
                        <Button colored onClick={this.copyLink}>
                            Share
                        </Button>
                    </CopyToClipboard>

                        </div>
                </CardActions>

                
            </Card> */}
            <div className='alignment'>

            <Card shadow={5} className='project-card' >
                
                <CardTitle className='business-time' >
                    Business Time
                </CardTitle>
                
                <CardText>Business website created for a fictional tie company. Objective of application is to demonstrate DOM manipulation using vanilla Javascript
                </CardText>
                <CardText>Technologies:<br/>
                    HTML, CSS, Javascript
                </CardText>
                
                <CardActions border style={{justifyContent: 'space-evenly'}}>
                    <div style={{display: 'grid' }}>

                    <Button colored
                    href={this.state.businessTime}
                    target="_blank">
                        Launch
                    </Button>
                    <Button colored
                    href="https://github.com/davidnielsen215/vschool-assignments/tree/master/projects/Week3/Business-Time"
                    target="_blank">
                        view code
                    </Button>


                    <CopyToClipboard text={this.state.businessTime}>
                        <Button colored onClick={this.copyLink}>
                            Share
                        </Button>
                    </CopyToClipboard>

                        </div>
                </CardActions>

                
            </Card>
            </div>
            <div className='alignment'>

            <Card shadow={5} className='project-card' >
                
                <CardTitle className='colossal-rpg' >
                    Colossal RPG
                </CardTitle>

                <CardText>RPG game using Node.js and readline-sync to communicate with user via terminal. Key inputs fire javascript functions which determine results of gameplay.
                </CardText>
                <CardText>Technologies:<br/>
                            Javscript, Node.js, Readline-Sync
                        </CardText>

                <CardActions border style={{justifyContent: 'space-evenly'}}>
                    <div style={{display: 'grid' }}>

                    <Button colored
                    href="https://github.com/davidnielsen215/vschool-assignments/tree/master/projects/Week3/colossal-adventure"
                    target="_blank">
                        view code
                    </Button>

                        </div>
                </CardActions>

        
            </Card>
            </div>
        </div>
        )
    // } else if(this.state.activeTab === 1){
        return (
            <div className='projects-grid'>

            
            
                
            </div>
                        
        )
    } else if (this.state.activeTab === 2){
        return (
            <div className='projects-grid'>
            
    </div>
        )
    } else if (this.state.activeTab === 3){
        return(
        <div className='projects-grid'>
            <Card shadow={5} className='project-card' >
                
        <CardTitle className='todo-list' >
            Axios Todo List
        </CardTitle>
        
        <CardText>Axios todo list application that makes calls to remote database and publishes todo items.
        </CardText>
        
        <CardActions border style={{justifyContent: 'space-evenly'}}>
            <div style={{display: 'grid' }}>

            <Button colored
            href="https://github.com/davidnielsen215/vschool-assignments/tree/master/projects/Week4/axios-todo"
            target="_blank">
                GitHub
            </Button>

            <Button colored
            href={this.state.todoAxios}
            target="_blank">
                Launch
            </Button>

            <CopyToClipboard text={this.state.todoAxios}>
                <Button colored onClick={this.copyLink}>
                    Share
                </Button>
            </CopyToClipboard>

                </div>
        </CardActions>

        
    </Card>
    </div>
        )
    }
    }

    render(){
        return(
            <>
            {/* <h1 className='top-fill'></h1> */}
            <div className='category-tab'>
                {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>NODE JS</Tab>
                    <Tab>Axios</Tab>
                    
                </Tabs> */}
                <Grid className="projects-color">
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>

                    </Cell>
                </Grid>

                
            </div>
            </>
        )
    }

}
export default Projects