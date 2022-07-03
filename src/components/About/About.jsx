import React from 'react';
import classes from '../About/AboutStyles.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function About() {
    return (   
        <div className="about_container">
            <div className={classes.about_content}>
                <Typography variant="h4" className={classes.about_heading} style={{paddingBottom: '1em', fontWeight: '500'}}>About</Typography>
                <Typography variant="body1" className={classes.about_text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quia consectetur tempore nostrum. Quis, illum esse libero at minima deserunt, autem accusantium amet numquam excepturi voluptas magni voluptatem commodi odio sit magnam deleniti et quos. Pariatur dolore ex ut excepturi officia iste, voluptas recusandae eaque nobis aliquam dolores explicabo aperiam?</Typography>
            </div>
            <div style={{textAlign: 'center'}}>
                <Button variant="outlined" sx={{
                    borderRadius: 50,
                    backgroundImage: 'linear-gradient(45deg, red, orange)',
                    boxShadow: '0px 5px 12px #CF77F3, 0px 5px 12px #009BFF, 0px -5px 12px #2AC9DB'
                }}
                className={classes.downloadBtn} startIcon={<DownloadIcon/>} style={{borderColor: '#FFCB06', color: '#242A35'}}>Download CV</Button>
            </div>
        </div>
    );
}

export default About;