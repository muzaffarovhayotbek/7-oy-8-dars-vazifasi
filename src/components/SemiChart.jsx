import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SemiChart = () => {
  const [state, setState] = useState({
    series: [33],
    options: {
      chart: {
        type: 'radialBar',
        offsetY: 20,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '49px',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: '#000000',
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '22px',
            },
          },
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
          colorStops: [
            {
              offset: 0,
              color: '#EF233C',
              opacity: 1,
            },
            {
              offset: 100,
              color: '#EF233C',
              opacity: 1,
            },
          ],
        },
      },
      labels: ['Average Results'],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default SemiChart;
