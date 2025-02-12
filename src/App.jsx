import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Chart from './components/Chart';
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container mx-auto pl-32 mt-22 mb-10 ">
        <div className="flex gap-5 items-center ">
          <h2
            className="text-[36px] text-[
            #000000] font-[600]"
          >
            Билим тести
          </h2>
          <h2 className="w-[1050px] bg-[#DEE2E6] h-[4px]"></h2>
        </div>
        <Chart/>
      
    
      </div>
    </div>
  );
}

export default App;
