import React from 'react';
import Paper from '@mui/material/Paper';
import classes from '../css/HomeStyles.module.css';
import ParticlesBackground from './BackgroundEffects/ParticlesBackground';

function Home() {
    return (  
        <div className="home">
            <Paper className={classes.heroBg} square>
                <ParticlesBackground/>
            </Paper>
        </div>
    );
}

export default Home;