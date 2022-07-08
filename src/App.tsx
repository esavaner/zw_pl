import React from 'react';
import './App.scss';

// import loc from './components/lang/translate';
import Footer from 'components/footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import Upload from 'components/upload/Upload';
import Navigation from 'components/navigation/Navigation';
import MainPage from 'pages/MainPage';
import PaintingsPage from 'pages/PaintingsPage';
import DrawingsPage from 'pages/DrawingsPage';
import DigitalPage from 'pages/DigitalPage';

function App() {
  return (
    <div className="app">
      <div className="content">
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<MainPage />}></Route>
          <Route path="paintings" element={<PaintingsPage />}></Route>
          <Route path="drawings" element={<DrawingsPage />}></Route>
          <Route path="digital" element={<DigitalPage />}></Route>
          <Route path="add" element={<Upload />}></Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
