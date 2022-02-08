import React, { useState } from 'react';
import Expand from 'components/expand/Expand';
import Gallery, { GalleryProps } from 'components/gallery/Gallery';
import './App.scss';
import './components/icons/all.scss';

// import loc from './components/lang/translate';
import {images} from './resources/images';
import { sizes, techniques, years } from 'components/gallery/FilterOptions';
import SlideShow from 'components/slide-show/SlideShow';
import About from 'components/about/About';
import Bubble from 'components/bubble/Bubble';
import Row from 'components/row/Row';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


enum ExpandType {
    HOME = 'home',
    PAINTINGS = 'paintings',
    DRAWINGS = 'drawings',
    DIGITAL = 'digital',
}


const paintingsGallery: GalleryProps = {
    images: images,
    filters: [years, techniques, sizes],
};

const drawingsGallery: GalleryProps = {
    images: images,
    filters: [years, techniques, sizes],
};

const digitalGallery: GalleryProps = {
    images: images,
    filters: [years, techniques, sizes],
};

function App() {
    const [eT, setET] = useState(ExpandType.HOME);
    const expand = () => {
        console.log(eT);
        switch(eT) {
        case ExpandType.HOME:
            return <Expand>
                <SlideShow images={images}></SlideShow>
                <About></About>
            </Expand>;
        
        case ExpandType.PAINTINGS:
            return <Expand color='red'>
                <Gallery {...paintingsGallery}></Gallery>
            </Expand>;

        case ExpandType.DRAWINGS:
            return <Expand color='green'>
                <Gallery {...drawingsGallery}></Gallery>
            </Expand>;

        case ExpandType.DIGITAL:
            return <Expand color='blue'>
                <Gallery {...digitalGallery}></Gallery>
            </Expand>;

        default:
            return <Expand>
                <Row>
                    <SlideShow images={images}></SlideShow>
                    <About></About>
                </Row>
            </Expand>;
        }
    };


    localStorage.setItem('lang', 'en');
    return (
        <div className='app'>
            <div className='back-image'></div>
            <div className='nav'>
                <Row>
                    <button onClick={() => setET(ExpandType.HOME)}>Home</button>
                    <button onClick={() => setET(ExpandType.PAINTINGS)}>Paintings</button>
                    <button onClick={() => setET(ExpandType.DRAWINGS)}>Drawings</button>
                    <button onClick={() => setET(ExpandType.DIGITAL)}>Digital</button>
                </Row>
            </div>
            <TransitionGroup>
                <CSSTransition
                    key={eT}
                    classNames='expand'
                    timeout={{enter: 500, exit: 500}}
                >
                    {expand()}
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;
