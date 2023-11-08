import React from 'react';
import Banner from '../components/Banner'
import Events from '../components/Events'
import HowItWorks from '../components/Howitworks'

function Home() {
  return (
    <div className = "home">
      <Banner/>
      <HowItWorks/>
      <Events/>
    </div>
  );
}

export default Home;
