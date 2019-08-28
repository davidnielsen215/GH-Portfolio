import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
import {Link} from 'react-router-dom'
import './App.css'
import './Projects.css'

class LandingPage extends Component {
    render(){
        // const image = require('./images/IMG_0536.jpg')
        
        return(
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className='banner-text2'>
                            <h1>DAVID NIELSEN</h1>
                        </div>
                        {/* <img 
                        src={image}
                        alt="avatar"
                        className="landing-image"
                        /> */}
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML | CSS | JavaScript | JSX | React | NodeJS | Express | MongoDB | Axios | Bcrypt | Bootstrap </p>
                        <Link to='/Projects' className='pro-btn'>view projects</Link>
                        
                    </div>
                        <div className='banner-text3'>
                        <div className="social-links">
                            
                            {/* facebook */}
                            {/* <a href="https://www.facebook.com/davenj8" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook"  aria-hidden="true" />
                            </a> */}

                            {/* Github */}
                            <a href="https://github.com/davidnielsen215" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github"  aria-hidden="true" />
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/david-nielsen-a02702188" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin"  aria-hidden="true" />
                            </a>

                            {/* instagram */}
                            {/* <a href="https://www.instagram.com/david.nielsn/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a> */}

                            {/* instagram */}
                            <a href="https://twitter.com/davidnielsn" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage