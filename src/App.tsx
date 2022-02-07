import React from 'react';
import Expand from 'components/expand/Expand';
import Gallery, { GalleryProps } from 'components/gallery/Gallery';
import './App.scss';

// import loc from './components/lang/translate';
import {images} from './resources/images';
import { sizes, techniques, years } from 'components/gallery/FilterOptions';
import SlideShow from 'components/slide-show/SlideShow';
import About from 'components/about/About';
import { Top } from 'components/top/Top';
import Bubble from 'components/bubble/Bubble';


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
    localStorage.setItem('lang', 'en');
    return (
        <div className='app'>
            <div className='back-image'></div>
            <div className='main'>
                <Bubble>
                    <Top></Top>
                </Bubble>
                <Bubble>
                    <About></About>
                </Bubble>
                <Bubble>
                    <Expand>
                        <Gallery {...paintingsGallery}></Gallery>
                    </Expand>
                    <Expand>
                        <Gallery {...drawingsGallery}></Gallery>
                    </Expand>
                    <Expand>
                        <Gallery {...digitalGallery}></Gallery>
                    </Expand>
                </Bubble>
                <Bubble>
                    <SlideShow images={images}></SlideShow>
                </Bubble>
            </div>
        </div>
    );
}

export default App;
