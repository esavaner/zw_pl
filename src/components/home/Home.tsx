import About from 'components/about/About';
import SlideShow from 'components/slide-show/SlideShow';
import { Context } from 'components/store/Store';
import React, { useContext } from 'react';

import './Home.scss';

export default function Home() {
    const {state} = useContext(Context);
    return (
        <div className='home'>
            <SlideShow images={state.images}></SlideShow>
            <About></About>
        </div>
    );
}