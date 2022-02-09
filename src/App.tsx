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
import Row from 'components/row/Row';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from 'components/button/Button';


enum ExpandType {
    HOME = 'home',
    PAINTINGS = 'paintings',
    DRAWINGS = 'drawings',
    DIGITAL = 'digital',
}


const paintingsGallery: GalleryProps = {
    header: 'Paintings',
    images: images,
    filters: [years, techniques, sizes],
};

const drawingsGallery: GalleryProps = {
    header: 'Drawings',
    images: images,
    filters: [years, techniques, sizes],
};

const digitalGallery: GalleryProps = {
    header: 'Digital',
    images: images,
    filters: [years],
};

function App() {
    const [eT, setET] = useState(ExpandType.HOME);
    const expand = () => {
        const home = <Expand background={ExpandType.HOME}>
            <SlideShow images={images}></SlideShow>
            <About></About>
        </Expand>;
        switch(eT) {
        case ExpandType.HOME:
            return home;
        
        case ExpandType.PAINTINGS:
            return <Expand background={ExpandType.PAINTINGS}>
                <Gallery {...paintingsGallery}></Gallery>
            </Expand>;

        case ExpandType.DRAWINGS:
            return <Expand background={ExpandType.DRAWINGS}>
                <Gallery {...drawingsGallery}></Gallery>
            </Expand>;

        case ExpandType.DIGITAL:
            return <Expand background={ExpandType.DIGITAL}>
                <Gallery {...digitalGallery}></Gallery>
            </Expand>;

        default:
            return home;
        }
    };


    localStorage.setItem('lang', 'en');
    return (
        <div className='app'>
            <div className='back-image'></div>
            <div className='nav'>
                <Row>
                    <Button click={() => setET(ExpandType.HOME)}>Home</Button>
                    <Button click={() => setET(ExpandType.PAINTINGS)}>Paintings</Button>
                    <Button click={() => setET(ExpandType.DRAWINGS)}>Drawings</Button>
                    <Button click={() => setET(ExpandType.DIGITAL)}>Digital</Button>
                </Row>
            </div>
            <TransitionGroup>
                <CSSTransition
                    key={eT}
                    classNames='expand'
                    timeout={{enter: 600, exit: 600}}
                >
                    {expand()}
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;
