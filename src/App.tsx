import React, { useContext } from 'react';
import './App.scss';
import './components/icons/all.scss';

// import loc from './components/lang/translate';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AT, Context } from 'components/store/Store';
import Expand from 'components/expand/Expand';
import Gallery from 'components/gallery/Gallery';
import Lightbox from 'components/lightbox/Lightbox';
import Cycle from 'components/cycle/Cycle';
import Footer from 'components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Upload from 'components/upload/Upload';
import Home from 'components/home/Home';
import Navigation from 'components/navigation/Navigation';


function App() {
    const {state} = useContext(Context);

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
                <Home></Home>
            </Expand>;
        }
    };
    return (
        <div className='app'>
            <div className='back-image'></div>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navigation></Navigation>
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
                    </>
                }>
                </Route>
                <Route path='add' element={
                    <Upload></Upload>
                }>
                </Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
