import React from 'react';
import classes from './HomeStyles.module.css';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SquareEffect from '../BackgroundEffects/SquareEffect';
import ProfileAvatar from '../../assets/avatar_profile_icon.svg';
import AboutPage from '../About/About';
import Typography from '@mui/material/Typography';
import SkillsPage from '../Skills/Skills';

function Home() {    
    return (  
        <div>
            <Paper className={classes.section} square elevation={0}>
                <SquareEffect/>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container className={classes.content} alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography component="h1" variant="h4" style={{fontWeight: '400'}}>Hi,</Typography>
                            <Typography variant="h2" style={{fontWeight: '500'}}>I'm Leanne</Typography>
                            <Typography variant="h5" style={{fontWeight: '400'}}>Graphic Designer | Frontend Developer</Typography>
                        </Grid>
                        <Grid item>
                            <img className={classes.profileAvatar} src={ProfileAvatar} alt="profile avatar icon" />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>

            {/* This is about page */}
            <AboutPage/>

            {/* This is skills page */}
            <SkillsPage/>
        </div>
    );
}

export default Home;