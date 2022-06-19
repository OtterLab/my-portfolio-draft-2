import React from 'react';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const socialMenu = [
    { icon: FacebookIcon, href: '', name: 'facebook' },
    { icon: InstagramIcon, href: '', name: 'instagram' },
    { icon: LinkedInIcon, href: '', name: 'linkedin' },
    { icon: GitHubIcon, href: '', name: 'github' },
]
function SocialMenuIcon() {
    return (  
        <div className="socialMenu">
            {socialMenu.map((item) => (
                <Link key={item.icon} href={item.href}>
                    <IconButton>
                        <item.icon/>
                    </IconButton>
                </Link>
            ))}
        </div>
    );
}

export default SocialMenuIcon;