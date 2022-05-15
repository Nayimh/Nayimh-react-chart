import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';

const Doughnutchart = ({chartData}) => {
    return (
        <div className='Bar'>
            <Doughnut data={chartData}/>
        </div>
    );
};

export default Doughnutchart;