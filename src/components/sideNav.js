import React, { Component } from 'react';

class SideNav extends Component{
    render(){
        return(
            <div>
               <h1>this is side of {this.props.cname}</h1>
            </div>
        )
    }
}

export default SideNav;