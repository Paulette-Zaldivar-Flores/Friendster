import { Route, Routes } from "react-router-dom";
import Banner from "../components/Banner";
import Events from "../components/Events";
import EventDetail from "../components/EventDetail";

function Home() {
  return (
    <div className='home'>
      <Banner />
      <Routes>
        <Route exact path='/' element={<Events />} />
        <Route exact path='/events/:id' element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default Home;
