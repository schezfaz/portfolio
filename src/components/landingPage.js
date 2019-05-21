import React, { Component } from 'react';
import './../style/landingPage.css';
import Grid from '@material-ui/core/Grid';

class Landing extends Component{
    render(){
        return(
            <div className="land">
                <div className="social-nav">
                <Grid container className="socialNavGrid" spacing={0}>
                   <Grid item xs><a href="www.google.com/schezeen"><i className="social-icon fab fa-linkedin fa-lg"></i></a></Grid>
                   <Grid item xs><a href="www.google.com"><i className="social-icon fab fa-medium fa-lg"></i></a></Grid>
                   <Grid item xs><a href="www.google.com"><i className="social-icon fab fa-twitter fa-lg"></i></a></Grid>
                   <Grid item xs><a href="www.google.com"><i className="social-icon fab fa-facebook fa-lg"></i></a></Grid>
                   <Grid item xs><a href="www.google.com"><i className="social-icon fab fa-github fa-lg"></i></a></Grid>
               </Grid>
                </div>
              
               <Grid container className = "landingGrid">
                    <Grid item xs = {12}>
                        <img alt="avatar" className="avatarImage" src={require("./../imageData/schez.png")}/>
                        <div className="nameBanner">
                            <h1 className="fullName">Schezeen Fazulbhoy</h1>
                            <p>Deeply invested in development, design and documentation, I am constantly striving to channelize these aspects in ways that they complement each other.</p>
                        </div>
                    </Grid>
               </Grid>
            </div>
        )
    }
}

export default Landing;