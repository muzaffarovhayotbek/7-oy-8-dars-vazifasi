import React from 'react';
import chart1 from '../assets/chart1.png';
import greenChart from '../assets/greenChart.png';
import greenThree from '../assets/greenThree.png';
import yellowChart from '../assets/yellowChart.png';
import blueChart from '../assets/blueChart.png';

import greenTwoChart from '../assets/greenTwoChart.png';

function Chart() {
  return (
    <div>
      <div className="w-[644px] gap-12">
        <div className="flex items-center  gap-12">
          <div className="w-[198px] pt-16">
            <img src={chart1} alt="" width={160} />
            <p className="text-[16px] text-[#495057] pt-4">
              Конституциявий-хукукий саводхонлик
            </p>
          </div>

          <div className="w-[198px] pt-16">
            <img src={greenChart} alt="" width={160} />
            <p className="text-[16px] text-[#495057] pt-4">
              Ахборот-коммуникация технологиялари
            </p>
          </div>

          <div className="w-[198px] pt-16">
            <img src={greenThree} alt="" />
            <p className="text-[16px] text-[#495057] font-[400] pt-4">
              Турли сохадаги ислохотлардан хабардорлик
            </p>
          </div>
        </div>

        <div className="flex  items-center gap-12 pt-25">
          <div className="w-[198px]">
            <img src={yellowChart} alt="" />
            <p className="text-[16px] pt-4 text-[#495057] w-[198px] ">
              Узбек тили ва адабиёти
            </p>
          </div>

          <div className="w-[198px]">
            <img src={blueChart} alt="" />
            <p className="text-[16px] text-[#495057] font-[400] pt-4 w-[198px] ">
              Узбекистон тарихи ва маданияти
            </p>
          </div>

          <div className="w-[198px]">
            <img src={greenTwoChart} alt="" />
            <p className="text-[16px] text-[#495057] font-[400] pt-4">
              Аклий салохияти ва мантикий фикрлаш
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
