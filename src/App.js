import React, {Component} from 'react'
// import {Grid, Cell} from 'react-mdl'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from "./Main.js"
import {Link} from 'react-router-dom'

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            home: "header-color1"
        }
    }


    render() {
        return (
            <div className="demo-big-content">
    <Layout>
        <Header className={this.state.home} title="DAVID NIELSEN" scroll>
            <Navigation className="navbar">
                <Link to="/Resume">RESUME</Link>
                {/* <Link to="/AboutMe">About Me</Link> */}
                <Link to="/Projects">PROJECTS</Link>
                <Link to="/Contact">CONTACT</Link>
                <Link to="/">HOME</Link>
            </Navigation>
        </Header>
        <Drawer title="View Profile">
            <Navigation>
                <Link to="/Resume">RESUME</Link>
                {/* <Link to="/AboutMe">About Me</Link> */}
                <Link to="/Projects">PROJECTS</Link>
                <Link to="/Contact">CONTACT</Link>
                <Link to="/">HOME</Link>
            </Navigation>
        </Drawer>
        <Content>            
            <Main/>
        </Content>
    </Layout>
            </div>
        )
    }
}

export default App