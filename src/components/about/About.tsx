import React from 'react';

import './About.scss';

interface AboutProps {
    children?: React.ReactNode;
}

export default function About(props: AboutProps) {
    return (
        <div className='about'>
            <span>Zosia Wiktorek</span>
            <div className='buttons'>
                <button>
                    About me
                    <i className='gg-arrow-right'></i>
                </button>
                <button>
                    Contact
                    <i className='gg-arrow-right'></i>
                </button>
            </div>
        </div>
    );
}