import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


interface BarChartProps {
    months: string[];
    patientNumbers: number[];
  }

const generateColors = (count: number): string[] => {
  const baseColors = [
    'rgba(194, 224, 132, 0.8)',  // apple-green-60
    'rgba(101, 163, 133, 0.8)',  // leaf-green-60
    'rgba(214, 234, 173, 0.8)',  // apple-green-20
    'rgba(148, 203, 134, 0.8)',  // secondary-green-60
  ];

  const colors = Array.from({ length: count }, (_, i) => baseColors[i % baseColors.length]);
  return colors;
};

const BarChart = (props: BarChartProps) => {
  const colors = generateColors(props.months.length);

  const data: ChartData<'bar'> = {
    labels: props.months,
    datasets: [
      {
        label: 'Number Of Active Patients',
        data: props.patientNumbers,
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace('0.8', '1.0')),
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // disable the key
        },
        title: {
            display: false,
            text: ' ',
          },
        },
        scales: {  // hides grid lines
          y: {
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {/* <h2 className="text-2xl font-bold text-center mb-4">Bar Chart Title</h2> */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
