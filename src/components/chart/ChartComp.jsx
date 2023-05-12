import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

const ChartComp = () => {
  const canvasRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (canvasRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const data = [
        { year: 2017 },
        { year: 2018 },
        { year: 2019 },
        { year: 2020},
        { year: 2021},
        { year: 2022},
        { year: 2023},
      ];
      chartInstance = new Chart(canvasRef.current, {
        type: 'line',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Weather',
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              borderColor: 'rgba(255, 193, 7, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255, 193, 7, 0.4)',
              hoverBorderColor: 'rgba(255, 193, 7, 1)',
              data: [65, 59, 80, 81, 56, 55, 70]
            },
            {
              label: 'Temperature',
              backgroundColor: 'rgba(233, 30, 99, 0.2)',
              borderColor: 'rgba(233, 30, 99, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(233, 30, 99, 0.4)',
              hoverBorderColor: 'rgba(233, 30, 99, 1)',
              data: [28, 32, 23, 19, 30, 27, 15]
            }
          ]
        }
      });
    }
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [canvasRef]);

  return (
    <div className='chart'>
      <canvas ref={canvasRef} id='myChart'></canvas>
    </div>
  );
};

export default ChartComp;
