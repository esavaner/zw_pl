import About from 'components/about/About';
import SlideShow from 'components/slide-show/SlideShow';
import React from 'react';

import './Home.scss';

export default function Home() {
    return (
        <div className='home'>
            <SlideShow></SlideShow>
            <About></About>
        </div>
    );
}