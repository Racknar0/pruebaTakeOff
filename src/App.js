import React from 'react';
import Header from './components/Header';
import './App.css'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import Slider from './components/Slider';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import FooterMobil from './components/FooterMobil';
import FooterDesktop from './components/FooterDesktop';

function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Slider />
            <Section1 />
            <Section2 />
        </main>

        <footer>
            <div className='d-md-none'>
              <FooterMobil />
            </div>
            <div className='d-none d-md-block'>
              <FooterDesktop />
            </div>
        </footer>
    </div>
  );
}

export default App;
