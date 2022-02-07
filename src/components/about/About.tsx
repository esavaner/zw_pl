import React from 'react';

import './About.scss';

interface AboutProps {
    children?: React.ReactNode;
}

export default function About(props: AboutProps) {
    return (
        <div className='about'>
            <button>About me</button>
            <button>Contact</button>
        </div>
    );
}