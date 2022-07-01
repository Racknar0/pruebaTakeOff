import React from 'react';
import Header from './components/Header';
import './App.css'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import Slider from './components/Slider';
import Section1 from './components/Section1';

function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Slider />
            <Section1 />
        </main>
    </div>
  );
}

export default App;
