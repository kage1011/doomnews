import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';


function Home() {
    return (
        <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:newsId" element={<DetailPage />} />
        </Routes>
    );
}
Home.propTypes = {};
Home.defaultProps = {};

export default Home;