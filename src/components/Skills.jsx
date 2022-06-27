import React from 'react';
import classes from '../css/SkillsStyles.module.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';

function Skills() {
    return (   
        <div className="container">
            <div className={classes.skills_content}>
                <Typography variant="h4" className={classes.skills_heading} style={{fontWeight: '500'}}>My Skills</Typography>
                <div className={classes.cards}>
                    <Card className={classes.card_content}>
                        <CardContent>
                            <CodeIcon style={{fontSize: "40", paddingTop: "10px", paddingBottom: "10px"}} />
                            <Typography variant="h6">FrontEnd</Typography>
                            <Typography variant="body2" style={{paddingTop: '10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga asperiores, quos vel aliquid recusandae facere ipsa! Blanditiis, molestiae enim.</Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.card_content}>
                        <CardContent>
                            <StorageIcon style={{fontSize: "40", paddingTop: "10px", paddingBottom: "10px"}} />
                            <Typography variant="h6">BackEnd</Typography>
                            <Typography variant="body2" style={{paddingTop: '10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga asperiores, quos vel aliquid recusandae facere ipsa! Blanditiis, molestiae enim.</Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.card_content}>
                        <CardContent>
                            <DesignServicesIcon style={{fontSize: "40", paddingTop: "10px", paddingBottom: "10px"}}/>
                            <Typography variant="h6">Graphic Design</Typography>
                            <Typography variant="body2" style={{paddingTop: '10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga asperiores, quos vel aliquid recusandae facere ipsa! Blanditiis, molestiae enim.</Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Skills;