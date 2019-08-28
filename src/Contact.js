import React, { Component } from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'
import { Grid, Cell } from 'react-mdl'



class Contact extends Component {
    
    render(){
        // const image = require('./images/IMG_5794.jpeg')
        const image1 = require('./images/IMG_5032.jpeg')
        // const image2 = require('./images/IMG_5916 2.JPG')
        return(
            <div >
                <Grid className="contact-grid">
                    <Cell col={12}>
                        {/* <img 
                        src={image1}
                        alt="avatar"
                        className="contact-image"
                        /> */}
                    <div className="contact-text">
                        <h1>Contact Info</h1>
                        <hr/>
                    
                        
                        
                        <h3 className='phone'>(575) 997-7631 </h3>
                        <h3 >davidnielsen215@gmail.com</h3>
                        <Link to='/' className='pro-btn'>HOME</Link>
                        <div className="social-links">
                            
                            {/* facebook */}
                            <a href="https://www.facebook.com/davenj8" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            {/* <a href="https://github.com/davidnielsen215" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github"  aria-hidden="true" />
                            </a> */}

                            {/* LinkedIn */}
                            {/* <a href="https://www.linkedin.com/in/david-nielsen-a02702188" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin"  aria-hidden="true" />
                            </a> */}

                            {/* instagram */}
                            <a href="https://www.instagram.com/david.nielsn/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>

                            {/* twitter */}
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
//style={{paddingLeft: '30px', fontSize: '35px', fontFamily: 'Anton'}}
//style={{paddingLeft: '57px', paddingBottom: '50px'}}

//style={{fontSize: '30px', fontFamily: 'Anton'}}
//style={{paddingLeft: '20px', paddingBottom: '50px'}} aria-hidden='true'

export default Contact