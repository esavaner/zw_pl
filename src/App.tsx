import React, { useContext, useState } from 'react';
import './App.scss';
import './components/icons/all.scss';

// import loc from './components/lang/translate';
import {images} from './resources/images';
import Row from 'components/row/Row';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from 'components/button/Button';
import { AT, Context } from 'components/store/Store';
import Expand from 'components/expand/Expand';
import Gallery from 'components/gallery/Gallery';
import SlideShow from 'components/slide-show/SlideShow';
import About from 'components/about/About';
import Lightbox from 'components/lightbox/Lightbox';
import Cycle from 'components/cycle/Cycle';



function App() {
    const {state, dispatch} = useContext(Context);
    localStorage.setItem('lang', 'en');

    const expand = () => {
        switch(state.expand) {
        case AT.PAINTINGS:
        case AT.DRAWINGS:
        case AT.DIGITAL:
            return <Expand background={state.expand}>
                <Gallery header={state.header} images={state.images} filters={state.filters}></Gallery>
            </Expand>;
        default: 
            return <Expand background={state.expand}>
                <SlideShow images={state.images}></SlideShow>
                <About></About>
            </Expand>;
        }
    };
    return (
        <div className='app'>
            <div className='back-image'></div>
            <div className='nav'>
                <Row>
                    <Button click={() => dispatch({type: AT.HOME})}>Home</Button>
                    <Button click={() => dispatch({type: AT.PAINTINGS})}>Paintings</Button>
                    <Button click={() => dispatch({type: AT.DRAWINGS})}>Drawings</Button>
                    <Button click={() => dispatch({type: AT.DIGITAL})}>Digital</Button>
                </Row>
            </div>
            <TransitionGroup>
                <CSSTransition
                    key={state.expand}
                    classNames='expand'
                    timeout={{enter: 600, exit: 600}}
                >
                    {expand()}
                </CSSTransition>
            </TransitionGroup>
            { state.lightbox &&
                <Lightbox>
                    <Cycle {...state.cycleProps}></Cycle>
                </Lightbox>
            }
        </div>
    );
}

export default App;
