import React, { Component } from 'react';
import './../style/landingPage.css';
import Grid from '@material-ui/core/Grid';

class Landing extends Component{
    render(){
        return(
            <div className="land">
               <Grid container className = "landingGrid">
                    <Grid item xs = {12}>
                        <img alt="avatar" className="avatarImage" src={require("./../imageData/schez.png")}/>
                        <div className="nameBanner">
                            <h1>Schezeen Fazulbhoy</h1>
                        </div>
                    </Grid>
               </Grid>
            </div>
        )
    }
}

export default Landing;