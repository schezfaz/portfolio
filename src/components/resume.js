import React, { Component } from 'react';
import SideNav from './sideNav';

class Resume extends Component{
    render(){
        return(
            <div>
                <h1>Resume</h1>
                <SideNav cname={"resume"}/>
            </div>
        )
    }
}

export default Resume;