import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Chart from './components/Chart';
import SemiChart from './components/SemiChart';
import SemiTwoChart from './components/SemiTwoChart';
import SemiThreeChart from './components/SemiThree';
import SemiFour from './components/SemiFour';
import SemiFiveChart from './components/SemiFive';
import SemiSixChart from './components/SemiSix';
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
        <div className="flex items-center gap-12 mb-12 w-[198px]">
          <div className="w-[198px]">
            <SemiChart />
            <p className="text-[16px] text-[#495057] font-[400] pt-8">
              Конституциявий-хукукий саводхонлик
            </p>
          </div>
          <div className="w-[198px] flex flex-col pt-8">
            <SemiTwoChart />
            <p className="text-[16px] text-[#495057] font-[400]">
              Ахборот-коммуникация технологиялари
            </p>
          </div>
          <div className="w-[198px] pt-8">
            <SemiThreeChart />
            <p className="text-[16px] text-[#495057] font-[400]">
              Турли сохадаги ислохотлардан хабардорлик
            </p>
          </div>
        </div>
        <div className="flex  items-center  gap-12">
          <div className="w-[198px]">
            <SemiFour />
            <p className="text-[16px] text-[#495057]">Узбек тили ва адабиёти</p>
          </div>
          <div className="w-[198px]">
            <p className="text-[16px] text-[#495057]">
            <SemiFiveChart/>
              Узбекистон тарихи ва маданияти
            </p>
          </div>
          <div className="w-[198px]">
            <p className="text-[16px] text-[#495057]">
              <SemiSixChart/>
              Аклий салохияти ва мантикий фикрлаш
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
