import React, { Component } from 'react';
import SideNav from './sideNav';

class About extends Component{
    render(){
        return(
            <div>
                <h1>About</h1>
                <SideNav cname={"about"}/>
            </div>
        )
    }
}

export default About;