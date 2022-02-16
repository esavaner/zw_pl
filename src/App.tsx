import React, { useContext } from 'react';
import './App.scss';
import './components/icons/all.scss';

// import loc from './components/lang/translate';
import Row from 'components/row/Row';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from 'components/button/Button';
import { AT, Context, LANG } from 'components/store/Store';
import Expand from 'components/expand/Expand';
import Gallery from 'components/gallery/Gallery';
import SlideShow from 'components/slide-show/SlideShow';
import About from 'components/about/About';
import Lightbox from 'components/lightbox/Lightbox';
import Cycle from 'components/cycle/Cycle';
import Footer from 'components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Upload from 'components/upload/Upload';
import loc from 'components/lang/translate';
import Home from 'components/home/Home';


function App() {
    const {state, dispatch} = useContext(Context);

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
                        <div className='nav'>
                            <Row>
                                <Button click={() => dispatch({type: AT.HOME})}>{loc('HOME')}</Button>
                                <Button click={() => dispatch({type: AT.PAINTINGS})}>{loc('PAINTINGS')}</Button>
                                <Button click={() => dispatch({type: AT.DRAWINGS})}>{loc('DRAWINGS')}</Button>
                                <Button click={() => dispatch({type: AT.DIGITAL})}>{loc('DIGITAL')}</Button>
                                <select value={state.lang} onChange={(e) => dispatch({type: AT.LANG, lang: e.target.value})}>
                                    <option className='pl' value={LANG.PL}>
                                        Polski (PL)
                                    </option>
                                    <option className='en' value={LANG.EN}>
                                        English (EN)
                                    </option>
                                </select>
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
