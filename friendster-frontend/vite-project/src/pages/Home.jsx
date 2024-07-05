import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from '../components/Banner';
import Events from '../components/Events';
import EventDetail from '../components/EventDetail';
import HowItWorks from '../components/Howitworks';
import Search from '../components/Search';

function Home() {
  return (
    <div className="home">
      <Banner />
      <HowItWorks/>
      <Routes>
        <Route index element={<Events />} />
        <Route path='events/:id' element={<EventDetail />} />
        <Route path='search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default Home;
