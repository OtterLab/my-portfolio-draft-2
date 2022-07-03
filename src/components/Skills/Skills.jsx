import React from 'react';
import classes from './SkillsStyles.module.css';
import Typography from '@mui/material/Typography';
import PenRulerCube from '../../assets/symmetric_cubes-01.svg';
import DesignCodeCube from '../../assets/symmetric_cubes-02.svg';
import ServerCube from '../../assets/symmetric_cubes-03.svg';

function Skills() {
    return (   
        <div className={classes.skills_container}>
            <div className={classes.skillsTitle}>
                <Typography variant="h4" className={classes.skills_heading} style={{fontWeight: '500', color: 'white'}}>My Skills</Typography>
            </div>
            <div className={classes.card_container}>
                <div className={classes.card}>
                    <div className={classes.cube}>
                        <img src={PenRulerCube} className={classes.cubeBox} alt="pen ruler cube"/>
                    </div>
                    <Typography variant="h5" style={{fontWeight: '500'}}>Graphic Design</Typography>
                    <Typography variant="body2" style={{paddingTop: '8px', paddingBottom: '8px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quod alias iste consectetur molestias reiciendis inventore eos accusantium. Explicabo, eum.</Typography>
                </div>
                <div className={classes.card}>
                    <div className={classes.cube}>
                        <img src={DesignCodeCube} className={classes.cubeBox} alt="design code cube"/>
                    </div>
                    <Typography variant="h5" style={{fontWeight: '500'}}>Frontend</Typography>
                    <Typography variant="body2" style={{paddingTop: '8px', paddingBottom: '8px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quod alias iste consectetur molestias reiciendis inventore eos accusantium. Explicabo, eum.</Typography>
                </div>
                <div className={classes.card}>
                    <div className={classes.cube}>
                        <img src={ServerCube} className={classes.cubeBox} alt="server cube"/>
                    </div>
                    <Typography variant="h5" style={{fontWeight: '500'}}>Backend</Typography>
                    <Typography variant="body2" style={{paddingTop: '8px', paddingBottom: '8px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quod alias iste consectetur molestias reiciendis inventore eos accusantium. Explicabo, eum.</Typography>
                </div>
            </div>
        </div>
    );
}

export default Skills;