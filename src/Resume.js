import React, { Component } from 'react'
import './Resume.css'
import {Link} from 'react-router-dom'


class Resume extends Component {
    render(){
        const resumeImg = require('./images/PortfolioResume3.png')
        // const resumeImg2 = require('./images/Resume-07:13.png')
        // const resumeImg3 = require('./images/Kami Export - Resume Resume.png')
        return(
            <div className="resume">

                <div className='banner-text1'>
                    <img
                    className='resume-img'
                    src={resumeImg}
                    alt="resume-img"
                    />
                <Link to='/' className='home-btn'>Home</Link>
                </div>
            </div>
        )
    }
}

export default Resume