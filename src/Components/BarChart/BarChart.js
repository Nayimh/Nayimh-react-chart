import React from 'react';
import './BarChart.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';

const BarChart = ({chartData}) => {
    return (
        <div className='Bar'>
            
            <Bar data={chartData } />
        </div>
    );
};

export default BarChart;