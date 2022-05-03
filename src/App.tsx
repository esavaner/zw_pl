import React, { useContext } from 'react';
import './App.scss';
import './components/icons/all.scss';

// import loc from './components/lang/translate';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AT, Context } from 'components/store/Store';
import Expand from 'components/expand/Expand';
import Gallery from 'components/gallery/Gallery';
import Lightbox from 'components/lightbox/Lightbox';
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
                <Gallery header={state.header} filters={state.filters} artType={state.artType}></Gallery>
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
                        <Lightbox images={state.lightboxImages} />
                    </>
                }>
                </Route>
                <Route path='add' element={
                    <Upload></Upload>
                }>
                </Route>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
