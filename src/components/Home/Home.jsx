import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import classes from './HomeStyles.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProfileAvatar from '../../assets/avatar_profile_icon.svg';
import Button from '@mui/material/Button';
import SquareBG from '../BackgroundEffects/SquareEffect';
import About from '../About/About';
import Skills from '../Skills/Skills';
import 'animate.css';

function Home() {
    return (  
        <div className="home">
            <Paper square className={classes.heroBg} elevation={0}>
                <SquareBG/>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container className={classes.content} justifyContent="space-between" alignItems="center">
                        <Grid item xs={5} className="animate__animated animate__slideInLeft">
                            <Typography component="h1" variant="h3" style={{fontWeight: 500}}>Hi,</Typography>
                            <Typography variant="h2" style={{fontWeight: 500}}>I'm Leanne</Typography>
                            <Typography variant="h5">Graphic Designer | Frontend Web Developer</Typography>
                            <Link to="/about" style={{textDecoration: 'none'}}>
                                <Button variant="contained" style={{backgroundColor: '#242A35', marginTop: '6px'}}
                                    size="medium">
                                    About Me
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={5}>
                            <img src={ProfileAvatar} alt="profile avatar" className={classes.profileImg}/>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>

            {/* This is about page */}
            <div className="about_div" style={{height: '80%', marginBottom: '20px'}}>
                <About/>
            </div>

            {/* This is skills page */}
            <div className="skills_div" style={{height: '80%'}}>
                <Skills/>
            </div>
        </div>
    );
}

export default Home;